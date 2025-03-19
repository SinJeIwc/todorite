import { useState, useEffect } from "react";
import "./LeftContainer.css";
import { users } from "../../../public/data/users.js";
import { messages as initialMessages } from "../../../public/data/chat.js";

function Contacts({ searchTerm, setCurrentChat }) {
  const [chatMessages, setChatMessages] = useState(initialMessages);

  useEffect(() => {
    setChatMessages([...initialMessages]); // Обновляем, если messages изменяются
  }, [initialMessages]);

  return (
    <section className="contacts_container">
      <h2 id="chats">CHATS</h2>
      <ul className="scroll js-scroll">
        {users.map((user) => (
          <li key={user.id}>
            <button
              onClick={() => setCurrentChat(user)}
              className="contact_button"
            >
              <article className="contact">
                <div className="contact_image">
                  <img src={user.profile_logo} alt="" />
                </div>
                <section className="text-in-contact">
                  <p className="contact_name">{user.name}</p>
                  <p className="about_contact">
                    {chatMessages.length > 0
                      ? chatMessages[chatMessages.length - 1].text
                      : ""}
                  </p>
                </section>
              </article>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
