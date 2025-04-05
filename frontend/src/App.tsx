import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Template from "./components/pages/templates/Template";
import Workout from "./components/pages/templates/Workout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment/:name" element={<Template />} />
        <Route path="/workout/" element={<Workout />} />
      </Routes>
    </>
  );
}

export default App;
