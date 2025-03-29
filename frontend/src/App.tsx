import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Template from "./components/pages/templates/Template";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment/:name" element={<Template />} />
      </Routes>
    </>
  );
}

export default App;
