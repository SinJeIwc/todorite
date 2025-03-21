import { useState } from "react";
import Contacts from "./Contacts";
import HeaderLeft from "./HeaderLeft";
import Footer from "./Footer";
import Seacher from "./Seacher";
import "./LeftContainer.css";

function LeftContainer({ currentChat, setCurrentChat }) {
  const [searchTerm, setSearchTerm] = useState(); // Храним введённый текст

  return (
    <section className="left_container">
      <HeaderLeft />
      <Seacher setSearchTerm={setSearchTerm} />{" "}
      {/* Передаём функцию обновления */}
      <Contacts setCurrentChat={setCurrentChat} searchTerm={searchTerm} />{" "}
      {/* Передаём searchTerm */}
      <Footer />
    </section>
  );
}

export default LeftContainer;
