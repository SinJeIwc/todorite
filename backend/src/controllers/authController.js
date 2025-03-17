import bcrypt from 'bcrypt';
import { getKnex } from '../utils/knex.js';
import {
  validateRegisterData, 
  validateLoginData, 
  addUser, 
  createToken,
  setProfileLogo
} from '../services/authServices.js';


export async function register(ctx) {
  const { name, email, password } = await validateRegisterData(ctx.request.body);
  
  const passwordHash = await bcrypt.hash(password, 12);
  const dbUser = await addUser(name, email, passwordHash);
  
  const [user] = dbUser;
  await setProfileLogo(user.id, '../assets/images/we.jpg');

  ctx.status = 201;
  ctx.body = { dbUser };
};


export async function login(ctx) {
  const { email, password } = await validateLoginData(ctx.request.body);

  const knex = await getKnex();
  const dbUser = await knex('users').where({ email }).first();

  if (!dbUser) {
    throw new Error('USER_NOT_FOUND');
  }

  const match = await bcrypt.compare(password, dbUser.password);

  if (!match) {
    throw new Error('login or password is uncorrect');
  }

  const token = await createToken(dbUser.id);

  ctx.status = 200;
  ctx.body = { ok: true, token };
};
