import "./LeftContainer.css";
import logo from "../../../public/img/logo.jpg";

function HeaderLeft() {
  return (
    <header className="logo_container">
      <img src={logo} alt="logo" id="logo_icon" />
      <h1 id="company_text">ToDoRite</h1>
    </header>
  );
}

export default HeaderLeft;
