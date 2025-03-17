import Router from 'koa-router';
import {
  getMessages,
  getChat,
  sendMessage
} from '../controllers/chatController.js';

export const chatRouter = new Router();

chatRouter.get('/chats/find/:user1_id/:user2_id', getChat);
chatRouter.get('/chats/:chat_id/messages', getMessages);
chatRouter.post('/chats/:chat_id/messages', sendMessage);
