import "./RightContainer.css";
import chatImg from "../../../public/chat.png";
import paperClip from "../../../public/paperclip.svg";
import sendImg from "../../../public/send.svg";
import { messages } from "../../../public/data/chat";

function InputContainer() {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const text = event.target.value;
      messages.push({
        id: 1,
        chat_id: 1,
        text: text,
        user_id: 1,
      });
      console.log(messages);
    }
  }

  function handleClick() {
    const inputElement = document.getElementById("messageInput");
    const text = inputElement.value;

    messages.push({
      id: 1,
      chat_id: 1,
      text: text,
      user_id: 1,
    });
    console.log(messages);
  }

  return (
    <footer className="input_container">
      <section className="input_menu">
        <img src={chatImg} id="chat_img" />
        <input
          type="text"
          id="messageInput"
          placeholder="Type message..."
          onKeyDown={handleKeyDown}
        />
        <img className="send_file" src={paperClip} />
        <button className="send_btn" onClick={handleClick}>
          <p>Send</p>
          <img src={sendImg} alt="" width="25" height="25" />
        </button>
      </section>
    </footer>
  );
}
export default InputContainer;
