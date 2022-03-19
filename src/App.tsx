import { Input } from "antd";
import "./App.css";

const { Search } = Input;

export const App = () => {
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        style={{ width: 200 }}
      />
    </div>
  );
};

export default App;
