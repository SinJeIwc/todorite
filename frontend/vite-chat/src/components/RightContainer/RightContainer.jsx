import { useState, useEffect } from "react";
import "./RightContainer.css";
import Chats from "./Chats";
import HeaderRight from "./HeaderRight";
import InputContainer from "./InputContainer";

function RightContainer({ currentChat, setCurrentChat }) {
  const [messages, setMessages] = useState([]);

  // Имитация загрузки старых сообщений
  useEffect(() => {
    async function loadMessages() {
      // Здесь можно заменить на API-запрос или localStorage
      const previousMessages = [
        { id: 1, chat_id: 1, text: "Привет! Как дела?", user_id: 2 },
        { id: 2, chat_id: 1, text: "Все отлично! А у тебя?", user_id: 1 },
        { id: 3, chat_id: 1, text: "Тоже хорошо, спасибо!", user_id: 2 },
      ];
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
