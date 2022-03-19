import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleNavigate = () => {
    navigate(`/view?blockId=${input}`);
  };

  return (
    <>
      <Input
        style={{ borderBottom: "1px solid black", width: "35vw" }}
        onPressEnter={handleNavigate}
        onChange={(e) => setInput(e.target.value)}
        width={20}
        bordered={false}
        allowClear
        placeholder="Search Block/ Tx / Account e.g 11222,531223"
        suffix={<SearchOutlined onClick={handleNavigate} />}
      />
    </>
  );
};
