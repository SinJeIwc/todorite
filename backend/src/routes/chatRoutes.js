import Router from 'koa-router';
import {
  getMessages,
  getChatId,
  sendMessage
} from '../controllers/chatController.js';

export const chatRouter = new Router();

chatRouter.get('/getChatId', getChatId);
chatRouter.get('/getMessages', getMessages);
chatRouter.post('/sendMessage', sendMessage);
