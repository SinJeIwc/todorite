import Router from 'koa-router';
import {
  getUsers,
  getCurrentUser
} from '../controllers/userController.js';

export const userRouter = new Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/me', getCurrentUser);
