import sign_out_img from "../../../public/sign_out.png";
import { meInfo } from "../../../public/data/me.js";

function Footer() {
  return (
    <footer className="profile_container">
      <div className="profile_btn">
        <img id="profile_logo" src={meInfo.profile_logo} alt="profile" />
        <span className="nickname">{meInfo.name}</span>
      </div>
      <button className="sign_out_btn js-sign_out_btn">
        <img id="sign_out_logo" src={sign_out_img} alt="sign out" />
      </button>
    </footer>
  );
}
export default Footer;
