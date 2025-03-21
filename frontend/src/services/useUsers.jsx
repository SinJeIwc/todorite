import { useState, useEffect } from "react";
import getCookie from "../utils/getCookie.jsx";

export default function useUsers() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const token = getCookie();
      
      if (!token) {
        console.log("NOT AUTHORIZED");
        return;
      }
      
      const response = await fetch("https://backend.todorite.live/users?include=profile_logo", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });

      const data = await response.json();
      setUsers(data.users);
    }
    fetchUsers();
  }, []);

  return users;
};
