import { Col } from "antd";
import { SearchBar } from "../components/SearchBar";

export const SearchPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: 24,
      }}
    >
      <Col>
        <h2 style={{ textAlign: "center" }}>
          <span style={{ fontWeight: 900 }}>Terra</span> Finder
        </h2>

        <SearchBar />
      </Col>
    </div>
  );
};
