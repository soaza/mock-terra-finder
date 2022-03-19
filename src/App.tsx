import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SearchPage } from "./Pages/SearchPage";
import { ViewPage } from "./Pages/ViewPage";

const ROUTES = [
  { path: "/", component: <SearchPage /> },
  { path: "/view", component: <ViewPage /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
