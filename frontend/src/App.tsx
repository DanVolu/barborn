import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Equipment from "./components/pages/templates/Equipment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment/" element={<Equipment />} />
      </Routes>
    </>
  );
}

export default App;
