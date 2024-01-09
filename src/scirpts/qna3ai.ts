import "../copyright";
import { Wallet, ethers } from "ethers";
import axios from "axios";
import abi from "./abi";
import BigNumber from "bignumber.js";

const chainIds = {
  206: {
    provider: new ethers.providers.JsonRpcProvider("https://opbnb.publicnode.com"),
  },
  56: {
    provider: new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc"),
  },
};

interface LoginResult {
  accessToken: string;
  user: User;
}

interface User {
  id: string;
  created_at: string;
  updated_at: string;
  email?: any;
  internal_address?: any;
  user_wallet_address: string;
  auth0_id?: any;
  invite_code: string;
  invite_chain: string[];
  invited_by_id?: any;
}

export class Qna3 {
  readonly name = "qna3.ai";

  private readonly contract: ethers.Contract;
  request = axios.create({
    baseURL: "https://api.qna3.ai/",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://qna3.ai",
    },
  });

  readonly provider: ethers.providers.JsonRpcProvider;

  /**
   * Qna3
   * @param wallet user wallet
   * @param chainId  56 | 206
   */
  constructor(private readonly wallet: Wallet, readonly chainId: 56 | 206) {
    this.provider = chainIds[chainId].provider;
    this.wallet.connect(this.provider);
    this.contract = new ethers.Contract("0xB342e7D33b806544609370271A8D074313B7bc30", abi, wallet.connect(this.provider));
    this.login();
  }

  accessToken?: string;
  id?: string;
  invite_id?: string;
  loginPromise: Promise<LoginResult> | undefined;

  /**
   * login
   * @docs 登录，获取 accessToken
   *
   * @param inviteCode 邀请人，上级
   * @returns
   */
  async login(inviteCode?: string) {
    if (!this.loginPromise) {
      this.loginPromise = this._login(inviteCode);
    }
    return this.loginPromise;
  }

  async _login(inviteCode?: string) {
    const signature = this.wallet.signMessage("AI + DYOR = Ultimate Answer to Unlock Web3 Universe");

    const params = {
      invite_code: inviteCode,
      wallet_address: await this.wallet.getAddress(),
      signature: await signature,
    };
    const { data } = await this.request.post<{
      data: LoginResult;
    }>("/api/v2/auth/login?via=wallet", params);
    const user = data.data.user;
    const accessToken = data.data.accessToken;
    this.accessToken = accessToken;
    this.id = user.id;
    this.invite_id = user.invite_chain[0];
    await this.getMeInfo();

    this.request = axios.create({
      timeout: 30 * 1000,
      baseURL: "https://api.qna3.ai/",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://qna3.ai",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data.data;
  }

  async getMeInfo() {
    const auth = {
      headers: {
        Authorization: `Bearer ${await this.getAccessToken()}`,
      },
    };
    const [me, credit] = await Promise.all([this.request.get("/user/me", auth).then((e) => e.data), this.request.get("/user/credit", auth).then((e) => e.data)]).catch((e) => {
      console.error(e);
      return [];
    });
  }

  /**
   * invitationCode
   * @docs 自己的邀请码
   * @type {string}
   * @memberof Qna3
   */
  invitationCode?: string;
  async getInvitationCode() {
    if (!this.invitationCode) {
      await this.getUserDetail();
    }
    return this.invitationCode as string;
  }

  /**
   * @docs 签到天数
   * @type {number}
   */
  checkInDays: number = 0;
  todayCount: number = 0;
  async getUserDetail() {
    const { data } = await this.request.post("/api/v2/graphql", {
      query:
        "query loadUserDetail($cursored: CursoredRequestInput!) {\n  userDetail {\n    checkInStatus {\n      checkInDays\n      todayCount\n    }\n    credit\n    creditHistories(cursored: $cursored) {\n      cursorInfo {\n        endCursor\n        hasNextPage\n      }\n      items {\n        claimed\n        extra\n        id\n        score\n        signDay\n        signInId\n        txHash\n        typ\n      }\n      total\n    }\n    invitation {\n      code\n      inviteeCount\n      leftCount\n    }\n    origin {\n      email\n      id\n      internalAddress\n      userWalletAddress\n    }\n    voteHistoryOfCurrentActivity {\n      created_at\n      query\n    }\n    ambassadorProgram {\n      bonus\n      claimed\n      family {\n        checkedInUsers\n        totalUsers\n      }\n    }\n  }\n}",
      variables: { cursored: { after: "", first: 20 } },
    });
    console.log(data.data);
    if (data.data) {
      this.invitationCode = data.data.userDetail.invitation.code;
      this.checkInDays = data.data.userDetail.checkInStatus.checkInDays;
      this.todayCount = data.data.userDetail.checkInStatus.todayCount;
    }
  }

  async getAccessToken() {
    if (!this.accessToken) {
      await this.login();
    }
    return this.accessToken as string;
  }

  get via() {
    return this.chainId === 56 ? "bnb" : "opbnb";
  }

  async getGasPrice() {
    return this.provider.getGasPrice().then((e) => new BigNumber(e.toString()).times(1.5).toFixed(0));
  }

  /**
   * checkIn
   * @docs 每日签到
   * @returns
   */
  async checkIn() {
    if (this.checkInDays >= 7) {
      console.log("check-in days >= 7");
      return;
    }

    if (this.checkInDays != 0 && this.todayCount === this.checkInDays) {
      console.log("checkIn is success");
      return;
    }

    const gasPrice = await this.getGasPrice();
    const loginTx = await this.contract.checkIn("1", {
      gasPrice: gasPrice,
    });
    await loginTx.wait(1);

    const hash = loginTx.hash;

    await this.request
      .request({
        url: "/api/v2/my/check-in",
        method: "POST",
        data: {
          hash: hash,
          via: this.via,
        },
      })
      .then((res) => {
        if (res.data.statusCode == 200) {
          console.log("check-in success", hash);
        }
      });
  }

  /**
   * claimCredit
   * @docs 领取积分，目前貌似只能在bnb领取
   * @returns
   */
  async claimCredit() {
    const { data: res } = await this.request.post(
      "/api/v2/my/claim-all",
      {},
      {
        headers: {
          Authorization: `Bearer ${await this.getAccessToken()}`,
        },
      }
    );

    console.log(res);
    if (res.data?.amount) {
      const gasPrice = await this.getGasPrice();

      const tx = await this.contract.claimCredit(res.data.amount, res.data.signature.nonce, res.data.signature.signature, {
        gasPrice: gasPrice,
      });

      await tx.await();
      console.log(tx);

      await this.request.post(`/api/v2/my/claim/${res.data.signature.nonce}`, {
        hash: tx.hash,
      });

      return tx;
    }
  }
}
