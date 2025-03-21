import { useState, useEffect } from "react";
import getCookie from "../utils/getCookie.jsx";

export default function useChat({ selectedContact, me }) {
const [chat, setChat] = useState([]);

  useEffect(() => {
    async function loadChatInfo() {
      const token = getCookie();
      if (!token) {
        console.log("user not authenticated");
        return;
      }
      try {
        const response = await fetch(
          `http://backend.todorite.live/chats/contacts/${selectedContact?.id}/${me.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 404) {
          console.log("MY ID",me.id)
          const createChatResponse = await fetch(
            `http://backend.todorite.live/chats/contacts/${selectedContact?.id}/${me.id}`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )

          const data = await createChatResponse.json();
          console.log("Created:", data);
          setChat(data.chat);

        } else {
        const data = await response.json();
        console.log(data)
        setChat(data.chat);
        } 
      } catch (error) {
        console.error("failed to load chat info:", error);
      }
    }
    if (selectedContact?.id) {
      loadChatInfo();
    }
  }, [selectedContact, me]);

  return chat;
};
