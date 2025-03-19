const result = {
  messages: [
    { id: 1, chat_id: 1, text: "Hi Bob", user_id: 1 },
    { id: 2, chat_id: 1, text: "Hi Jimmy", user_id: 2 },
    { id: 3, chat_id: 1, text: "What you doing", user_id: 2 },
    { id: 4, chat_id: 1, text: "Nothing", user_id: 1 },
    { id: 5, chat_id: 1, text: "Hi Bob", user_id: 1 },
    { id: 6, chat_id: 1, text: "Hi Jimmy", user_id: 2 },
    { id: 7, chat_id: 1, text: "What you doing", user_id: 2 },
    { id: 8, chat_id: 1, text: "Nothing", user_id: 1 },
  ],
};

export let { messages } = result;
console.log(messages[messages.length - 1].id + 1);
