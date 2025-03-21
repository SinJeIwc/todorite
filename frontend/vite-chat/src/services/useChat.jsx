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
        // замените url на ваш эндпоинт для получения сообщений конкретного чата
        const response = await fetch(
          `http://backend.todorite.live/chats/find/${selectedContact?.id}/${me.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new error(`error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setChat(data.chat);
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
