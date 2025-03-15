import Router from 'koa-router';
import { getKnex } from '../knex.js';

export * from './auth.js';

export const router = new Router();

router.get('/users', async (ctx) => {
  const knex = await getKnex();
  const users = await knex('users');

  ctx.body = { users };
  ctx.status = 200;
});
