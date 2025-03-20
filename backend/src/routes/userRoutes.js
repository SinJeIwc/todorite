import Router from 'koa-router';
import {
  getUsers,
  getCurrentUser,
  getUser
} from '../controllers/userController.js';

export const userRouter = new Router();

userRouter.get('/users', getUsers);
userRouter.get('/auth/me', getCurrentUser);
userRouter.get('/users/:user_id', getUser);
