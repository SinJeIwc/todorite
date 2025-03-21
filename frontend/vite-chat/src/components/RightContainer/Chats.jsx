import { useState, useEffect, useRef } from "react";
import { meInfo } from "../../../public/data/me";
import getCookie from "../../utils/getCookie";


function Chats({ chat_id, selectedContact, messages, me }) {
  const chatEndRef = useRef(null);
  const [fetchedMessages, setFetchedMessages] = useState([]);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, fetchedMessages]);

  const allMessages = [...messages, ...fetchedMessages];
  console.log(allMessages);

  return (
    <ul key="chat-list" className="contact-chat_container">
      {allMessages.map((item, index) =>
        item.user_id === me.id ? (
          <section
            key={item.id ?? `my-message-${index}`}
            className="my-message_container"
          >
            <p>{item.text}</p>
            <img src={me.profile_logo} alt="Profile" />
          </section>
        ) : (
          <section
            key={item.id ?? `contact-message-${index}`}
            className="contact-message_container"
          >
            <img src={selectedContact.profile_logo} alt="Profile"/>
            <p>{item.text}</p>
          </section>
        )
      )}
      <div ref={chatEndRef} />
    </ul>
  );
}

export default Chats;

