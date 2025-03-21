import { useState, useEffect } from "react";
import getCookie from "../utils/getCookie.jsx";

export default function useChat({ selectedContact, me }) {
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true); // Изначально true

  useEffect(() => {
    async function loadChatInfo() {
      const token = getCookie();
      if (!token) {
        console.log("User not authenticated");
        setLoading(false);
        return;
      }
      if (!selectedContact?.id || !me?.id) {
        setLoading(false);
        return; 
      }
      setLoading(true);
      try {
        const response = await fetch(
          `https://backend.todorite.live/chats/contacts/${selectedContact.id}/${me.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 404) {
          const createChatResponse = await fetch(
            `https://backend.todorite.live/chats/contacts/${selectedContact.id}/${me.id}`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await createChatResponse.json();
          console.log("Создан чат:", data);
          setChat(data);
        } else {
          const data = await response.json();
          console.log("Получен чат:", data.chat);
          setChat(data.chat);
        }
      } catch (error) {
        console.error("Ошибка при загрузке чата:", error);
      } finally {
        setLoading(false);
      }
    }
    loadChatInfo();
  }, [selectedContact, me]);

  return { chat, loading };
}
