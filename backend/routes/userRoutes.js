import Router from 'koa-router';
import {getUsers} from '../controllers/userController.js';

export const userRouter = new Router();

userRouter.get('/getUsers', getUsers);
