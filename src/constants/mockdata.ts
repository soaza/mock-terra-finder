import { IBlock, TTransactionType } from "./interfaces";

export const blocks: IBlock[] = [
  {
    blockId: 22323132,
    coin: "BTC",
    tokens: 0.0002319083,
    transactions: [
      {
        hash: "858EB471DFF3805367775306CCF469AD209C4CB23F3FE796F8EA20F1ABB61807",
        type: TTransactionType.MsgMultiSend,
        fee: 20,
        feeType: "Luna",
        timestamp: "Jan 13, 2021, 2:45:05 PM (GMT+8)",
      },
    ],
  },
  {
    blockId: 23132,
    coin: "BTC",
    tokens: 0.0002319083,
    transactions: [
      {
        hash: "618B28E61B227EB1F537756E1575FAA8F20DC6F68FBB66C22693D74B2864A690",
        type: TTransactionType.MsgAggregateExchangeRateVote,
        fee: 11,
        feeType: "XRP",
        timestamp: "Sept 13, 2019, 3:45:05 PM (GMT+8)",
      },
    ],
  },
];
