import "./RightContainer.css";
import chatImg from "../../../public/chat.png";
import paperClip from "../../../public/paperclip.svg";
import sendImg from "../../../public/send.svg";

function InputContainer() {
  return (
    <footer className="input_container">
      <section className="input_menu">
        <img src={chatImg} id="chat_img" />
        <input type="text" id="messageInput" placeholder="Type message..." />
        <img className="send_file" src={paperClip} />
        <button className="send_btn">
          <p>Send</p>
          <img src={sendImg} alt="" width="25" height="25" />
        </button>
      </section>
    </footer>
  );
}
export default InputContainer;
