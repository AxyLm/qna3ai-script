// https://bscscan.com/address/0xB342e7D33b806544609370271A8D074313B7bc30

export default [
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "activityIndex",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint64",
        name: "_endTs",
        type: "uint64",
      },
    ],
    name: "ActivityEndTsModify",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_startTs",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_endTs",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "_maxQuestionId",
        type: "uint16",
      },
    ],
    name: "addActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newDefaultCredit",
        type: "uint32",
      },
    ],
    name: "changeDefaultCredit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newVoteInterval",
        type: "uint32",
      },
    ],
    name: "changeDefaultVoteInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "code",
        type: "uint256",
      },
    ],
    name: "checkIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "code",
        type: "uint256",
      },
    ],
    name: "CheckIn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "amount",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "claimCredit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint32",
        name: "amount",
        type: "uint32",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "CreditClaim",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "oldDefaultCredit",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "newDefaultCredit",
        type: "uint256",
      },
    ],
    name: "DefaultCreditSet",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "oldDefaultVoteInterval",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "newVoteInterval",
        type: "uint256",
      },
    ],
    name: "DefaultVoteIntervalSet",
    type: "event",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_activityIndex",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_endTs",
        type: "uint64",
      },
    ],
    name: "modifyActivityEndTs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "oldOperator",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorSet",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperatorAddress",
        type: "address",
      },
    ],
    name: "setOperatorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "setSignerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "oldSigner",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "SignerSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "questionID",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "credit",
        type: "uint32",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "activityIndex",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "questionID",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint32",
        name: "credit",
        type: "uint32",
      },
    ],
    name: "VoteQuestion",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "activityList",
    outputs: [
      {
        internalType: "uint64",
        name: "startTs",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "endTs",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "maxQuestionId",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activityListLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "activityQuestionVote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultCredit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultVoteInterval",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activityIndex",
        type: "uint256",
      },
    ],
    name: "getActivityInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startTs",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "endTs",
            type: "uint64",
          },
          {
            internalType: "uint16",
            name: "maxQuestionId",
            type: "uint16",
          },
        ],
        internalType: "struct QnaVotes.ActivityInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getCredit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "amount",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getSignerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "toEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfoMap",
    outputs: [
      {
        internalType: "bool",
        name: "creditInit",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "creditNum",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "voteTs",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_msgHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
