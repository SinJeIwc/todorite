import sign_out_img from "../../../public/sign_out.png";
import logo from "../../../public/logo.jpg";

function Footer() {
  return (
    <footer className="profile_container">
      <div className="profile_btn">
        <img id="profile_logo" src={logo} alt="profile" />
        <span className="nickname">Putin</span>
      </div>
      <button className="sign_out_btn js-sign_out_btn">
        <img id="sign_out_logo" src={sign_out_img} alt="sign out" />
      </button>
    </footer>
  );
}
export default Footer;
