import "./CompanyMenu.css";
import logo from "../../../public/img/logo.jpg";

function CompanyMenu() {
  return (
    <section className="company-menu">
      <div className="company-text">
        <p className="company-name">Todorite</p>
        <p className="company-description">Secured messaging app</p>
      </div>
      <div className="company-logo">
        <img id="company-icon" src={logo} alt="" />
      </div>
    </section>
  );
}
export default CompanyMenu;
