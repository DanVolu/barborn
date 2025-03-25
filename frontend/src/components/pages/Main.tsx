import Navbar from "../navbar/Nav";
import Equipment from "./sections/Equipment";
import Goal from "./sections/Goal";
import Landing from "./sections/Landing";
import Supplements from "./sections/Supplements";
import Training from "./sections/Training";

function Main() {
  return (
    <>
      <Navbar />
      <Landing />
      <Goal />
      <Equipment />
      <Supplements />
      <Training />
    </>
  );
}

export default Main;
