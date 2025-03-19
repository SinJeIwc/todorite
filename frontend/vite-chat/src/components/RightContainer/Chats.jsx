import { useEffect, useRef } from "react";
import { meInfo } from "../../../public/data/me";
import { users } from "../../../public/data/users";

function Chats({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul className="contact-chat_container">
      {messages.map((item) =>
        item.user_id === meInfo.id ? (
          <section key={item.id} className="my-message_container">
            <p>{item.text}</p>
            <img src={meInfo.profile_logo} alt="" />
          </section>
        ) : (
          <section key={item.id} className="contact-message_container">
            <img
              src={users.find((user) => user.id === item.user_id).profile_logo}
              alt=""
            />
            <p>{item.text}</p>
          </section>
        )
      )}
      <div ref={chatEndRef} /> {/* Прокрутка вниз */}
    </ul>
  );
}

export default Chats;
