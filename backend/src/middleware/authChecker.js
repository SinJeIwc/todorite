import { getKnex } from '../utils/knex.js';
import { getUserByToken } from '../services/authServices.js';

export default async function authChecker(ctx, next) {
  const knex = await getKnex();
  
  const { headers } = ctx.request;
  const { authorization } = headers;
  const [_, token] = authorization?.split(' ');

  if (token) {
    const userInfo = await getUserByToken(token);

    if (!userInfo) {
      throw new Error('NOT AUTHORIZED');
    }

    ctx.state.user = userInfo;

    return next();
  }

  throw new Error('NOT AUTHORIZED');
}
