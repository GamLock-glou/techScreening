import { Route, Routes } from "react-router-dom";
import "./app.module.scss";
import { Test2 } from "./test2/components/Test2";

function App() {
  return <div>
    <Routes>
      <Route path={"/test2"} element={<Test2 />} />;
    </Routes>
  </div>;
}

export default App;
