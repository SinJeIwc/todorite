import { getKnex } from '../utils/knex.js';
import {
  fetchMessages,
  fetchChat,
  addMessage,
  addChat
} from '../services/chatServices.js';


export async function getChat(ctx) {
  const {user1_id, user2_id} = ctx.params;
  const chat = await fetchChat(user1_id, user2_id);

  if (!chat) {
    ctx.status = 404;
    ctx.body = { error: 'CHAT_NOT_FOUND' };

    return;
  };
  
  ctx.status = 200;
  ctx.body = { chat };
};

export async function getMessages(ctx) {
  const {chat_id} = ctx.params;
  const messages = await fetchMessages(chat_id);

  ctx.status = 200;
  ctx.body = { messages };
};

export async function sendMessage(ctx) {
  const { chat_id } = ctx.params;
  const {text, user_id} = ctx.request.body;
  const result = await addMessage(chat_id, text, user_id);

  ctx.status = 201;
  ctx.body = result;
};

export async function createChat(ctx) {
  const { user1_id, user2_id } = ctx.params;
  const chat = await addChat(user1_id, user2_id);

  console.log(chat);
  ctx.status = 201;
  ctx.body = chat;
};


