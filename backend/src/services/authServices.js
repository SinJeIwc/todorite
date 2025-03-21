import Joi from 'joi';
import { getKnex } from '../utils/knex.js';
import * as crypto from 'node:crypto';


const knex = await getKnex();

export async function validateRegisterData(data) {
  const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return joiSchema.validateAsync(data);
};


export async function validateLoginData(data) {
  const joiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return joiSchema.validateAsync(data);
};


export async function addUser(name, email, password) {
  const user = await knex('users').insert({
    name,
    email,
    password
  }).returning('*');
  
  return user;
};


export async function createToken(user_id) {
  const token = crypto.randomBytes(20).toString('hex');

  await knex('tokens').insert({
    user_id,
    token,
  });

  return token
};


export async function fetchCurrentUser(token) {
  const { rows: [userInfo] } = await knex.raw(`
      SELECT users.*, tokens.token, users_profile.profile_logo
      FROM tokens
      INNER JOIN users ON users.id = tokens.user_id
      LEFT JOIN users_profile ON users.id = users_profile.user_id
      WHERE tokens.token = ?
    `, [token]);

  return userInfo;
};


export async function setProfileLogo(user_id, profile_logo) {
  await knex('users_profile').insert({
    user_id,
    profile_logo,
  });
};
