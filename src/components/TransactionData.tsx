import { Space, Table } from "antd";
import React from "react";
import { IBlock, ITransaction } from "../constants/interfaces";

interface IProps {
  blockData: IBlock;
}
export const TransactionData: React.FC<IProps> = (props) => {
  const { blockData } = props;

  const columns = [
    {
      title: "Transaction Hash",
      dataIndex: "hash",
      key: "hash",
    },
    {
      title: "Transaction Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Transaction Fee",
      dataIndex: "fee",
      key: "fee",
      render: (fee: number, record: ITransaction) => (
        <div>
          {fee} {record.feeType}
        </div>
      ),
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
    },
  ];

  return (
    <>
      <Table
        title={() => <h2> Transactions</h2>}
        style={{ marginTop: 20 }}
        dataSource={blockData.transactions}
        columns={columns}
      />
    </>
  );
};
