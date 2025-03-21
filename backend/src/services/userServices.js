import { getKnex } from '../utils/knex.js';

const knex = await getKnex();


export async function fetchUsers({ includeProfileLogo = false } = {}) {
  let query = knex('users').select('users.id', 'users.name');

  if (includeProfileLogo) {
    query = query
      .leftJoin('users_profile', 'users.id', 'users_profile.user_id')
      .select('users_profile.profile_logo');
    }

  const users = await query;
  return users;
}

export async function fetchUser(user_id) {
  let query = knex('users')
    .select('users.id', 'users.name', 'users_profile.profile_logo')
    .leftJoin('users_profile', 'users.id', 'users_profile.user_id')
    .where('users.id', user_id)

  const [user] = await query;
  return user;
}

