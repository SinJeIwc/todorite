import Contacts from "./Contacts";
import HeaderLeft from "./HeaderLeft";
import Profile from "./Profile";
import Seacher from "./Seacher";

function LeftContainer() {
  return (
    <section className="left_container">
      <HeaderLeft />
      <Seacher />
      <Contacts />
      {/* <Profile /> */}
    </section>
  );
}

export default LeftContainer;
