import { getKnex } from '../utils/knex.js';
import { fetchCurrentUser } from '../services/authServices.js';
import { fetchUsers } from '../services/userServices.js';

const knex = await getKnex();


export async function getUsers(ctx) {
  const includeLogo = ctx.query.include === 'profile_logo';
  const users = await fetchUsers({ includeProfileLogo: includeLogo });
  
  ctx.body = { users };
  ctx.status = 200;
};


export async function getCurrentUser(ctx) {
  const { headers } = ctx.request;
  const { authorization } = headers;
  const [_, token] = authorization?.split(' ');
 
  const userInfo = await fetchCurrentUser(token);

  if (!userInfo) {
    ctx.status = 404;
    ctx.body = { error: 'USER_NOT_FOUND' };

    return;
  }
  
  ctx.status = 200;
  ctx.body = { userInfo };
};
