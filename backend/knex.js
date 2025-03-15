import Knex from 'knex';
import { PG_URI } from './utils/config.js';

let knex;

export async function getKnex() {
  if (knex) {
    return knex;
  }

  knex = Knex(PG_URI);
  
  return knex;
}
