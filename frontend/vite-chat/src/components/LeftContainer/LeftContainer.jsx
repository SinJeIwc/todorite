import Contacts from "./Contacts";
import HeaderLeft from "./HeaderLeft";
import Footer from "./Footer";
import Seacher from "./Seacher";
import "./LeftContainer.css";
import useUser from "../../services/useUser.jsx";
import {useState} from "react"

function LeftContainer({ currentChat, setCurrentChat }) {
  const me = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  
  if (!me) return <div>Loading user!</div>

  return (
    <section className="left_container">
      <HeaderLeft />
      <Seacher />
      <Contacts me={me} searchTerm={searchTerm} setCurrentChat={setCurrentChat}/>
      <Footer me={me} />
    </section>
  );
}

export default LeftContainer;
