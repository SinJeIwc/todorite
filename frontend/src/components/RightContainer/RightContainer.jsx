import "./RightContainer.css";
import Chats from "./Chats";
import HeaderRight from "./HeaderRight";
import InputContainer from "./InputContainer";
import { useState, useEffect } from "react";
import getCookie from "../../utils/getCookie";
import useChat from "../../services/useChat.jsx";

function RightContainer({ selectedContact, setSelectedContact, me }) {
  const { chat, loading } = useChat({ selectedContact, me });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const token = getCookie();
      if (!token) {
        console.log("User not authenticated");
        return;
      }
      try {
        const response = await fetch(
          `https://backend.todorite.live/chats/${chat.id}/messages`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        const sortedMessages = data.messages.slice().sort((a, b) => a.id - b.id);
        setMessages(sortedMessages);
      } catch (error) {
        console.error("Ошибка при загрузке сообщений:", error);
      }
    }
    if (chat && chat.id) {
      loadMessages();
    }
  }, [chat]);

  if (loading || !chat) {
    return <section className="right_container"></section>;
  }

  return (
    <section className="right_container">
      <HeaderRight user_id={selectedContact.id} selectedContact={selectedContact} />
      <Chats chat_id={chat.id} selectedContact={selectedContact} messages={messages} me={me} />
      <InputContainer chat_id={chat.id} user_id={selectedContact.id} messages={messages} setMessages={setMessages} me={me} />
    </section>
  );
}

export default RightContainer;
