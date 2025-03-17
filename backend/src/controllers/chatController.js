import { getKnex } from '../utils/knex.js';
import { fetchMessages } from '../services/chatServices.js';
import { fetchChat } from '../services/chatServices.js';

export async function getChatId(ctx) {
  const {user1_id, user2_id} = ctx.request.query;
  const chat = await fetchChat(user1_id, user2_id);

  if (!chat) {
    throw new Error('CHAT_NOT_FOUND');
  };
  
  const {id} = chat;

  ctx.status = 200;
  ctx.body = { id };
};


export async function getMessages(ctx) {
  const {chat_id} = ctx.request.query;
  const messages = await fetchMessages(chat_id);

  ctx.status = 200;
  ctx.body = { messages };
};
