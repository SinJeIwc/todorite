import { useState } from "react";
import "./RightContainer.css";
import chatImg from "../../../public/img/chat.png";
import paperClip from "../../../public/img/paperclip.svg";
import sendImg from "../../../public/img/send.svg";

function InputContainer({ messages, setMessages }) {
  const [inputValue, setInputValue] = useState("");

  function handleSendMessage() {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(), // Уникальный ID
      chat_id: 1,
      text: inputValue,
      user_id: 1,
    };

    setMessages([...messages, newMessage]); // Добавляем новое сообщение в конец списка
    setInputValue(""); // Очищаем поле ввода
  }

  return (
    <footer className="input_container">
      <section className="input_menu">
        <img src={chatImg} id="chat_img" />
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
          <img src={sendImg} alt="" width="25" height="25" />
        </button>
      </section>
    </footer>
  );
}

export default InputContainer;
