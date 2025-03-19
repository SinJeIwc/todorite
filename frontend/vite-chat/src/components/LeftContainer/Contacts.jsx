import "./LeftContainer.css";
import { users } from "../../../public/data/contacts.js";

function Contacts({ searchTerm, setCurrentChat }) {
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
                  <img src={user.image} alt="" />
                </div>
                <section className="text-in-contact">
                  <p className="contact_name">{user.nickname}</p>
                  <p className="about_contact">Last message here...</p>
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
