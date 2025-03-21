import Navbar from "../navbar/Nav";
import Equipment from "./sections/Equipment";
import Landing from "./sections/Landing";
import Supplements from "./sections/Supplements";
import Training from "./sections/Training";

function Main() {
  return (
    <>
      <Navbar />
      <Landing />
      <Equipment />
      <Supplements />
      <Training />
    </>
  );
}

export default Main;
