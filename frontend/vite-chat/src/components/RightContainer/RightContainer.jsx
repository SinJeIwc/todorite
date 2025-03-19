import "./RightContainer.css";
import Chats from "./Chats";
import HeaderRight from "./HeaderRight";
import InputContainer from "./InputContainer";
import { messages as previousMessages } from "../../../public/data/chat";
import { useState, useEffect } from "react";

function RightContainer({ currentChat }) {
  const [messages, setMessages] = useState([]);

  // Имитация загрузки старых сообщений
  useEffect(() => {
    async function loadMessages() {
      setMessages(previousMessages);
    }

    loadMessages();
  }, []); // Загружаем сообщения при монтировании

  return (
    <section className="right_container">
      <HeaderRight />
      <Chats currentChat={currentChat} messages={messages} />
      <InputContainer messages={messages} setMessages={setMessages} />
    </section>
  );
}

export default RightContainer;
