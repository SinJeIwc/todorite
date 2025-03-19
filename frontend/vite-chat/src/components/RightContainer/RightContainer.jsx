import "./RightContainer.css";
import Chats from "./Chats";
import HeaderRight from "./HeaderRight";
import InputContainer from "./InputContainer";

function RightContainer({ currentChat, setCurrentChat }) {
  console.log(currentChat);

  return (
    <section className="right_container">
      <HeaderRight />
      <Chats currentChat={currentChat} />
      <InputContainer />
    </section>
  );
}
export default RightContainer;
