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
}

export enum TTransactionType {
  MsgSend,
  MsgMultiSend,
}
