import { messages } from "../../../public/data/chat";
import { meInfo } from "../../../public/data/me";
import "./RightContainer.css";

function Chats({ currentChat }) {
  return (
    <>
      <ul className="contact-chat_container" id="messageList">
        {messages.map((item) => (
          <div
            className={
              item.user_id === meInfo.id
                ? "my-message_container"
                : "contact-message_container"
            }
            key={item.id}
          >
            <p>{item.text}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Chats;
