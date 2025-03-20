import { getKnex } from '../utils/knex.js';

const knex = await getKnex();


export async function fetchChat(user1_id, user2_id) {
  const { rows: [chat] } = await knex.raw(`
    SELECT * 
    FROM chats
    WHERE (user1_id = ? AND user2_id = ?) OR (user1_id = ? AND user2_id = ?)
  `, [user1_id, user2_id, user2_id, user1_id]);
  
  return chat;
};

export async function fetchMessages(chat_id) {
  const messages = await knex('messages')
    .where('chat_id', chat_id)
    .select('*');

  return messages;
};

export async function addMessage(chat_id, text, user_id) {
  const result = await knex('messages')
    .insert({
      chat_id,
      text,
      user_id
    });

  return result;
}
