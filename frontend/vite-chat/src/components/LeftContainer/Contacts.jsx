import { useState, useEffect } from "react";
import "./LeftContainer.css";
import { messages as initialMessages } from "../../../public/data/chat.js";
import getCookie from "../../utils/getCookie.jsx";
import useUser from "../../services/useUser.jsx";

function Contacts({ me, searchTerm, setCurrentChat }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const token = getCookie();
      
      if (!token) {
        console.log("NOT AUTHORIZED");
        return;
      }
      
      const response = await fetch("http://backend.todorite.live/users?include=profile_logo", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });

      const data = await response.json();
      console.log(data.users)
      setUsers(data.users);
    }
    fetchUsers();
  }, []);

  
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
                onClick={() => setCurrentChat(user)}
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

