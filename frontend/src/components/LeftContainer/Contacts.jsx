import { useState, useEffect } from "react";
import "./LeftContainer.css";
import { messages as initialMessages } from "../../../public/data/chat.js";
import getCookie from "../../utils/getCookie.jsx";
import useUser from "../../services/useUser.jsx";
import useUsers from "../../services/useUsers.jsx";


function Contacts({ me, setSelectedContact }) {
  const users = useUsers();
  
  if (!users) return <div>Loading contacts...</div>;

  return (
    <section className="contacts_container">
      <h2 id="chats">CHATS</h2>
      <ul className="scroll js-scroll">
        {users
          .filter((user) => user.id !== me.id)
          .map((user) => (
            <li key={user.id}>
              <button
                onClick={() => setSelectedContact(user)}
                className="contact_button"
              >
                <article className="contact">
                  <div className="contact_image">
                    <img src={user.profile_logo} alt="" />
                  </div>
                  <section className="text-in-contact">
                    <p className="contact_name">{user.name}</p>
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

