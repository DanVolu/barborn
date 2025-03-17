import "./App.css";
import Navbar from "./components/navbar/Nav";
import Equipment from "./components/pages/sections/Equipment";
import Landing from "./components/pages/sections/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Equipment />
    </>
  );
}

export default App;
