import Contacts from "./Contacts";
import HeaderLeft from "./HeaderLeft";
import Footer from "./Footer";
import Seacher from "./Seacher";
import "./LeftContainer.css";

function LeftContainer({ currentChat, setCurrentChat }) {
  return (
    <section className="left_container">
      <HeaderLeft />
      <Seacher />
      <Contacts />
      <Footer />
    </section>
  );
}

export default LeftContainer;
