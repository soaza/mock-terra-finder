export interface IBlock {
  blockId: number;
  coin: string;
  tokens: number;
  transactions: ITransaction[];
}

export interface ITransaction {
  hash: string;
  type: TTransactionType;
  fee: number;
  feeType: string;
  timestamp: string;
}

export enum TTransactionType {
  MsgSend,
  MsgMultiSend,
  MsgExchangeRateVote,
  MsgAggregateExchangeRateVote,
}
