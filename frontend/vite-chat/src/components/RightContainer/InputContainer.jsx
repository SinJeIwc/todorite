import { useState } from "react";
import "./RightContainer.css" // Можно создать отдельный файл или оставить общий, если стили общие
import chatImg from "../../../public/img/chat.png";
import sendImg from "../../../public/img/send.svg";
import getCookie from "../../utils/getCookie";



function InputContainer({chat_id, user_id, messages, setMessages, me}) {
  const [inputValue, setInputValue] = useState("");

  async function handleSendMessage() {
    const chatId = 1
    if (!inputValue.trim()) return;

    const token = getCookie();
    if (!token) {
      console.log("User not authenticated");
      return;
    }

    const newMessage = {
      chat_id: chat_id,
      text: inputValue,
      user_id: me.id,
    };

    console.log("Sending message:", newMessage);

    try {
      const response = await fetch(
        `http://backend.todorite.live/chats/${chat_id}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMessage),
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, data]); // Функциональное обновление стейта
      setInputValue(""); // Очищаем поле ввода
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }

  return (
    <footer className="input_container">
      <section className="input_menu">
        <img src={chatImg} id="chat_img" alt="Chat Icon" />
        <input
          type="text"
          id="messageInput"
          placeholder="Type message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="send_btn" onClick={handleSendMessage}>
          <p>Send</p>
          <img src={sendImg} alt="Send" width="25" height="25" />
        </button>
      </section>
    </footer>
  );
}

export default InputContainer;
