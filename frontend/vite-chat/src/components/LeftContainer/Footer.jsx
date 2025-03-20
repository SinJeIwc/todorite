import sign_out_img from "../../../public/sign_out.png";
import { meInfo } from "../../../public/data/me.js";
import { useState, useEffect } from "react";

document.cookie = `token=0abe3f48f9b1be7f5891fd0f84ece8105fa1d440; path=/;`

function getCookie() {
  const [_, token] = document.cookie.split('=');
  return token;
}

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
      setUser(data);
    }
    fetchUser();
  }, []);

  if (!user) return <div>Loading user info...</div>;

  return (
    <footer className="profile_container">
      <div className="profile_btn">
        <img id="profile_logo" src={user.userInfo.profile_logo} alt="profile" />
        <span className="nickname">{user.userInfo.name}</span>
      </div>
      <button className="sign_out_btn js-sign_out_btn">
        <img id="sign_out_logo" src={sign_out_img} alt="sign out" />
      </button>
    </footer>
  );
}
export default Footer;
