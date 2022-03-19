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
      },
    ],
  },
  {
    blockId: 23132,
    coin: "BTC",
    tokens: 0.0002319083,
    transactions: [
      {
        hash: "858EB471DFF3805367775306CCF469AD209C4CB23F3FE796F8EA20F1ABB61807",
        type: TTransactionType.MsgMultiSend,
        fee: 20,
        feeType: "Luna",
      },
    ],
  },
];
