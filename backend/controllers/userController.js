import { getKnex } from '../utils/knex.js';

export async function getUsers(ctx) {
  const knex = await getKnex();
  const users = await knex('users');

  ctx.body = { users };
  ctx.status = 200;
};
