function InputContainer() {
  return (
    <div class="input_container">
      <div class="input_menu">
        <img src="../assets/images/chat.png" id="chat_img" />
        <input type="text" id="messageInput" placeholder="Type message..." />
        <img class="send_file" src="../assets/images/paperclip.svg" />
        <button class="send_btn">
          <p>Send</p>
          <img src="../assets/images/send.svg" alt="" width="25" height="25" />
        </button>
      </div>
    </div>
  );
}
export default InputContainer;
