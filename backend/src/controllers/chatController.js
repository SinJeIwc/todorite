import { getKnex } from '../utils/knex.js';
import {
  fetchMessages,
  fetchChat,
  addMessage
} from '../services/chatServices.js';

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


export async function sendMessage(ctx) {
  const {chat_id, text, user_id} = ctx.request.body;
  const result = await addMessage(chat_id, text, user_id);

  if (!result) {
    throw new Error('NOT_ADDED');
  };

  ctx.status = 201;
  ctx.body = { ok: true };
};
