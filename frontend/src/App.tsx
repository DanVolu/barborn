import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Rings from "./components/pages/templates/Rings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gymnastic-rings/" element={<Rings />} />
      </Routes>
    </>
  );
}

export default App;
