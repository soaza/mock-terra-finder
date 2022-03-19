/**
2. A simplified "view" page. it should show the Address section, Coins section, Tokens section, and Transactions.
3. For the Transactions section, each row only needs to include Tx hash , Type , Block, Timestamp, and Fee. The Tx hash doesn't need to be a link (so you do NOT need to create a page to show the details of the transaction)

 */

import { Col, Descriptions, Row } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BlockData } from "../components/BlockData";
import { SearchBar } from "../components/SearchBar";
import { TransactionData } from "../components/TransactionData";
import { IBlock } from "../constants/interfaces";
import { blocks } from "../constants/mockdata";

export const ViewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blockId, setBlockId] = useState(searchParams.get("blockId"));
  const [blockData, setBlockData] = useState<IBlock>();

  useEffect(() => {
    setBlockData(blocks.find((block) => String(block.blockId) === blockId));
  }, [blockId]);

  return (
    <Row justify="center">
      <Col span={16}>
        <Row style={{ margin: "20px 0px" }} justify="end">
          <SearchBar />
        </Row>

        {blockData && (
          <>
            <BlockData blockData={blockData} />
            <TransactionData />
          </>
        )}
      </Col>
    </Row>
  );
};
