import { IBlock, TTransactionType } from "./interfaces";

export const blocks: IBlock[] = [
  {
    blockId: 531223,
    coin: "LUNA",
    tokens: 64.23,
    transactions: [
      {
        hash: "858EB471DFF3805367775306CCF469AD209C4CB23F3FE796F8EA20F1ABB61807",
        type: TTransactionType.MsgMultiSend,
        fee: 20,
        feeType: "Luna",
        timestamp: "Jan 13, 2021, 2:45:05 PM (GMT+8)",
      },
      {
        hash: "618B28E61B227EB1F537756E1575FAA8F20DC6F68FBB66C22693D74B2864A690",
        type: TTransactionType.MsgAggregateExchangeRateVote,
        fee: 11,
        feeType: "XRP",
        timestamp: "Sept 13, 2019, 3:45:05 PM (GMT+8)",
      },
      {
        hash: "C72F24A44A9B7F7963124176FA4DA26BF458E921A22AC2F636E81513561DD718",
        type: TTransactionType.MsgExchangeRateVote,
        fee: 1.04,
        feeType: "ETH",
        timestamp: "Sept 13, 2019, 3:45:05 PM (GMT+8)",
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
  {
    blockId: 11222,
    coin: "BTC",
    tokens: 0.003319083,
    transactions: [
      {
        hash: "C72F24A44A9B7F7963124176FA4DA26BF458E921A22AC2F636E81513561DD718",
        type: TTransactionType.MsgMultiSend,
        fee: 11,
        feeType: "XRP",
        timestamp: "Sept 13, 2019, 3:45:05 PM (GMT+8)",
      },
    ],
  },
];
