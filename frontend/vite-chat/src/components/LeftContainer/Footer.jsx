import sign_out_img from "../../../public/sign_out.png";
import getCookie from "../../utils/getCookie.jsx";
import { useState, useEffect } from "react";

document.cookie = `token=ba0416e71d89e9ba21410f38d5c36b056b36bc1b; path=/;`

function Footer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const token = getCookie();
      
      if (!token) {
        console.log("NOT AUTHORIZED");
        return;
      }
      
      const response = await fetch("http://backend.todorite.live/auth/me", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
          },
      });

      const data = await response.json();
      setUser(data.userInfo);
    }
    fetchUser();
  }, []);

  if (!user) return <div>Loading user info...</div>;

  return (
    <footer className="profile_container">
      <div className="profile_btn">
        <img id="profile_logo" src={user.profile_logo} alt="profile" />
        <span className="nickname">{user.name}</span>
      </div>
      <button className="sign_out_btn js-sign_out_btn">
        <img id="sign_out_logo" src={sign_out_img} alt="sign out" />
      </button>
    </footer>
  );
}
export default Footer;
