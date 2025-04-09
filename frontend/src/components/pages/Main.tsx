import Navbar from "../navbar/Nav";
import Equipment from "./sections/Equipment";
// import Purpose from "./sections/Purpose";
import Landing from "./sections/Landing";
// import Supplements from "./sections/Supplements";
import Training from "./sections/Training";
// import Contact from "./sections/Contact";

function Main() {
  return (
    <>
      <Navbar />
      <Landing />
      <Equipment />
      {/* <Supplements /> */}
      <Training />
      {/* <Purpose /> */}
      {/* <Contact /> */}
    </>
  );
}

export default Main;
