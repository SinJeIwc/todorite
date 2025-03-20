import sign_out_img from "../../../public/img/sign_out.png";
import useUser from "../../services/useUser.jsx";

function Footer({me}) {

  return (
    <footer className="profile_container">
      <div className="profile_btn">
        <img id="profile_logo" src={me.profile_logo} alt="profile" />
        <span className="nickname">{me.name}</span>
      </div>
      <button className="sign_out_btn js-sign_out_btn">
        <img id="sign_out_logo" src={sign_out_img} alt="sign out" />
      </button>
    </footer>
  );
}
export default Footer;
