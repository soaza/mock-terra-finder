import { Descriptions } from "antd";
import React from "react";
import { IBlock } from "../constants/interfaces";

interface IProps {
  blockData: IBlock;
}
export const BlockData: React.FC<IProps> = (props) => {
  const { blockData } = props;

  const styleLabel = (label: string) => {
    return <b> {label}</b>;
  };
  return (
    <>
      <div style={{ fontSize: 24 }}>
        <span style={{ fontWeight: 900 }}>Block</span> #{blockData?.blockId}
      </div>

      <Descriptions bordered>
        <Descriptions.Item span={4} label={styleLabel("Block ID")}>
          {blockData.blockId}
        </Descriptions.Item>
        <Descriptions.Item span={12} label={styleLabel("Coin")}>
          {blockData.coin}
        </Descriptions.Item>
        <Descriptions.Item span={12} label={styleLabel("Tokens")}>
          {blockData.tokens} {blockData.coin}
        </Descriptions.Item>

        <Descriptions.Item
          span={12}
          label={styleLabel("Number of Transactions")}
        >
          {blockData.transactions.length}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
