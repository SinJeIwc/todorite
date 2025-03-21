import Contacts from "./Contacts";
import HeaderLeft from "./HeaderLeft";
import Footer from "./Footer";
import Seacher from "./Seacher";
import './LeftContainer.css';
import {useState} from "react"

function LeftContainer({ selectedContact, setSelectedContact, me }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <section className="left_container">
      <HeaderLeft />
      <Seacher />
      <Contacts me={me} searchTerm={searchTerm} setSelectedContact={setSelectedContact}/>
      <Footer me={me} />
    </section>
  );
}

export default LeftContainer;
