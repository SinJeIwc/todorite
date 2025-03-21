import { useState, useEffect } from "react";
import getCookie from "../utils/getCookie.jsx";

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const token = getCookie();
      
      if (!token) {
        console.log("NOT AUTHORIZED");
        window.location.href = '/login';
        return;
      }
      
      const response = await fetch("https://backend.todorite.live/auth/me", {
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
  
  return user;
}
