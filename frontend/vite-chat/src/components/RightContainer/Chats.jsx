import { useEffect, useRef } from "react";

function Chats({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul className="contact-chat_container">
      {messages.map((item) => (
        <div
          key={item.id}
          className={
            item.user_id === 1
              ? "my-message_container"
              : "contact-message_container"
          }
        >
          <p>{item.text}</p>
        </div>
      ))}
      <div ref={chatEndRef} /> {/* Прокрутка вниз */}
    </ul>
  );
}

export default Chats;
