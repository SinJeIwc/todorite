import { useState, useEffect } from "react";
import getCookie from "../utils/getCookie.jsx";

export default function useUser() {
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
  
  return user;
}
