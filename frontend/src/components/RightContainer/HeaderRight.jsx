import "./RightContainer.css";
import logo from "../../../public/img/logo.jpg";
import ellipsis from "../../../public/img/ellipsis-vertical-solid.svg";
import { users } from "../../../public/data/users.js";

function HeaderRight({user_id, selectedContact}) {
  return (
    <header className="chat_header">
      <section className="current_user">
        <img src={selectedContact.profile_logo} alt="" className="current_user_logo" />
        <p className="current_user_name">{selectedContact.name}</p>
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
