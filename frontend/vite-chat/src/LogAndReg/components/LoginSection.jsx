import "./LogReg.css";
import userLogo from "../../../public/img/bx_bxs-user.svg";
import closeLogo from "../../../public/img/bx_bxs-lock-alt.svg";
import mailLogo from "../../../public/img/codicon_mail.svg";

function LoginSection() {
  return (
    <section className="register-container">
      <div className="register-menu">
        <div className="welcome-menu">
          <p className="hello-text">Hello Again!</p>
          <p className="sign-up-text">Welcome Back</p>
        </div>

        <div className="input-menu">
          <div id="result"></div>
          <div className="input-container">
            <img className="menu-icon" src={mailLogo} />
            <input
              className="input-email"
              type="text"
              placeholder="Email Adddress"
            />
            <span className="domain-placeholder"></span>
          </div>
          <div className="input-container">
            <img className="menu-icon" src={closeLogo} />
            <input
              className="input-pass"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="buttons-container">
            <button className="register-button js-login">Login</button>
            <a className="login-redirect" href="../register/">
              Don't have account? Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginSection;
