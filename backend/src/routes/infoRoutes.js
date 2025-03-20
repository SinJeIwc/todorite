import Router from 'koa-router';
import { welcome } from '../controllers/infoController.js';

export const infoRouter = new Router();

infoRouter.get('/', welcome);
