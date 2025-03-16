import { getKnex } from '../utils/knex.js';
import { fetchUserByToken } from '../services/authServices.js';
import { fetchChat } from '../services/userServices.js';

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


export async function getUserByToken(ctx) {
  const { headers } = ctx.request;
  const { authorization } = headers;
  const [_, token] = authorization?.split(' ');
 
  const userInfo = await fetchUserByToken(token);

  if (!userInfo) {
    throw new Error('USER_NOT_FOUND');
  }
  
  ctx.status = 200;
  ctx.body = { userInfo };
};


export async function getChatId(ctx) {
  const {user1_id, user2_id} = ctx.request.query;
  const chat = await fetchChat(user1_id, user2_id);

  if (!chat) {
    throw new Error('CHAT_NOT_FOUND');
  };
  
  const {id} = chat;

  ctx.status = 200;
  ctx.body = { id };
};
