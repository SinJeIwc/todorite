import Router from 'koa-router';
import {register, login} from '../controllers/authController.js';

export const authRouter = new Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
