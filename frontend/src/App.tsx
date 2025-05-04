import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Template from "./components/pages/templates/Template";
import Workout from "./components/pages/templates/Workout";
import CategoryPage from "./components/pages/templates/Category";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment/:name" element={<Template />} />
        <Route path="/workout/" element={<Workout />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;