import Router from 'koa-router';
import { getUsers, getUsersAndLogo } from '../controllers/userController.js';

export const userRouter = new Router();

userRouter.get('/getUsers', getUsers);
userRouter.get('/getUsersAndLogo', getUsersAndLogo);
