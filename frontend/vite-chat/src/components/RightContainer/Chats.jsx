import { messeges } from "../../../public/data/chat";
import "./RightContainer.css";

function Chats({ currentChat }) {
  console.log(currentChat);
  return (
    <>
      <ul className="contact-chat_container" id="messageList">
        {messeges
          .filter((item) => item?.chat_id == currentChat?.id)
          .map((item) => (
            <li>{item.text}</li>
          ))}
      </ul>
    </>
  );
}

export default Chats;
