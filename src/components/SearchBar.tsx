import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export const SearchBar = () => {
  return (
    <Input
      style={{ borderBottom: "1px solid black", width: "35vw" }}
      width={20}
      bordered={false}
      allowClear
      placeholder="Search Block/ Tx / Account"
      suffix={<SearchOutlined />}
    />
  );
};
