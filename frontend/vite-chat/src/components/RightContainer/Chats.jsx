import { messages } from "../../../public/data/chat";
import { meInfo } from "../../../public/data/me";
import "./RightContainer.css";

function Chats({ currentChat }) {
  return (
    <>
      <ul className="contact-chat_container" id="messageList">
        {messages
          .filter((item) => item?.chat_id == currentChat?.id)
          .map((item) => (
            <div
              className={
                item.id === meInfo.id
                  ? "my-message_container"
                  : "contact-message_container"
              }
              key={1}
            >
              <p>{item.text}</p>
            </div>
          ))}
      </ul>
    </>
  );
}

export default Chats;
