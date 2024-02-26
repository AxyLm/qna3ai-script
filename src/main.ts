import { Wallet } from "ethers";
import { Qna3 } from "./scirpts/qna3ai";

(async () => {
  if (!process.env.WALLET_PRIVATEKEY) {
    console.error("%c !!! WALLET_PRIVATEKEY is not set, please create .env file and set it ", "color: red");
    process.exit(1);
  }

  const wallet = new Wallet(process.env.WALLET_PRIVATEKEY);
  const qna3 = new Qna3(wallet, 204);

  // login and check in

  await qna3.login("78yppP2H");
  await qna3.checkIn();
})();
