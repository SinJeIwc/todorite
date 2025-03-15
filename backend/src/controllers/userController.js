import { getKnex } from '../utils/knex.js';
const knex = await getKnex();

export async function getUsers(ctx) {
  const users = await knex('users');

  ctx.body = { users };
  ctx.status = 200;
};

export async function getUsersAndLogo(ctx) {
  const users = await knex('users')
    .join('users_profile', 'users.id', '=', 'users_profile.user_id')
    .select('users.id', 'users.name', 'users_profile.profile_logo');
  
  ctx.body = { users };
  ctx.status = 200; 
};

