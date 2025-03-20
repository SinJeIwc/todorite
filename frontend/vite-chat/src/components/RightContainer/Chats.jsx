import { useState, useEffect, useRef } from "react";
import { meInfo } from "../../../public/data/me";
import { users } from "../../../public/data/users";
import getCookie from "../../utils/getCookie";

function Chats({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const token = getCookie();
      if (!token) {
        console.log("NOT AUTHORIZED");
        return;
      }

      const response = await fetch(
        "http://backend.todorite.live/chats/10/messages/${chat_id}/messages",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const messages = await response.json();
      console.log(messages);
      setUser(messages);
    }
    fetchUser();
  }, []);

  return (
    <ul key="chat-list" className="contact-chat_container">
      {messages.map((item, index) =>
        item.user_id === meInfo.id ? (
          <section
            key={item.id ?? `my-message-${index}`}
            className="my-message_container"
          >
            <p>{item.text}</p>
            <img src={meInfo.profile_logo} alt="Profile" />
          </section>
        ) : (
          <section
            key={item.id ?? `contact-message-${index}`}
            className="contact-message_container"
          >
            <p>{item.text}</p>
          </section>
        )
      )}
      <div ref={chatEndRef} /> {/* Прокрутка вниз */}
    </ul>
  );
}

export default Chats;
