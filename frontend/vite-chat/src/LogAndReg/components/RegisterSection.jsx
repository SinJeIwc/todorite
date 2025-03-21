import "./LogReg.css";
import userLogo from "../../../public/img/bx_bxs-user.svg";
import closeLogo from "../../../public/img/bx_bxs-lock-alt.svg";
import mailLogo from "../../../public/img/codicon_mail.svg";

function RegisterSection() {
  return (
    <section className="register-container">
      <div className="register-menu">
        <div className="welcome-menu">
          <p className="hello-text">Hello!</p>
          <p className="sign-up-text">Sign Up to Get Started</p>
        </div>

        <div className="input-menu">
          <div id="result"></div>
          <div className="input-container">
            <img className="menu-icon" src={userLogo} alt="User Icon" />
            <input
              className="input-name"
              type="text"
              placeholder="Full Name"
              name="name"
            />
          </div>
          <div className="input-container">
            <img className="menu-icon" src={mailLogo} alt="Mail Icon" />
            <input
              className="input-email"
              type="text"
              placeholder="Email Address"
              name="email"
            />
            <span className="domain-placeholder"></span>
          </div>
          <div className="input-container">
            <img className="menu-icon" src={closeLogo} alt="Lock Icon" />
            <input
              className="input-pass"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="buttons-container">
            <button className="register-button js-register">Register</button>
            <a className="login-redirect" href="/login/">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
