import "./RightContainer.css";
import logo from "../../../public/logo.jpg";
import ellipsis from "../../../public/ellipsis-vertical-solid.svg";
import { users } from "../../../public/data/users.js";

function HeaderRight() {
  return (
    <header className="chat_header">
      <section className="current_user">
        <img src={users[0].profile_logo} alt="" className="current_user_logo" />
        <p className="current_user_name">{users[0].name}</p>
      </section>
      <article className="more_btn">
        <section className="more" id="deleteAllButton">
          Delete All
        </section>
        <img src={ellipsis} id="ellipsisIcon" alt="" />
      </article>
    </header>
  );
}
export default HeaderRight;
