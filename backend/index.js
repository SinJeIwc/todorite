import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import { getKnex } from './knex.js';
import { HTTP_PORT } from './utils/config.js';
import {
  router,
  authRouter
} from './controllers/index.js';
import cors from 'koa-cors';


async function main() {
  console.log('start', new Date());

  const knex = await getKnex();
  const app = new Koa();


  // Allows connections from FrontEnd server
  app.use(cors({
    origin: 'http://127.0.0.1:8080',
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(bodyparser());

  // Joi error handler
  app.use((async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      if (e.isJoi) {
        console.log('this is joi error');
        ctx.status = 400;
        ctx.body = {
          errors: e.details
        };

      return;
      }

      console.log('caught in trycatch', e.message);

      ctx.status = 500;
      ctx.body = {
        message: e.message
      };
    }
  }));

  // Logger
  app.use(async (ctx, next) => {
    console.log(ctx.method, ctx.url, ctx.body);

    await next()
    console.log('after request in logger');
  })

  app.use(authRouter.routes());

  // Cookie checker
  app.use(async (ctx, next) => {
    //ctx.request.query.token
    //const cookieToken = ctx.cookies.get('token');
    const cookieToken = ctx.request.query.token;
 
    console.log(cookieToken)

    if (cookieToken) {
      const { rows: [userInfo] } = await knex.raw(`
        select * from tokens
        inner join users
          on users.id = tokens.user_id
        where tokens.token = ?
      `, [cookieToken]);

      if (!userInfo) {
        throw new Error('NOT AUTHORIZED');
      }

      ctx.state.user = userInfo;

      return next();
    }

    const { headers } = ctx.request;
    const { authorization } = headers;
    const token = authorization?.split(' ')[1];

    if (token) {
      const { rows: [userInfo] } = await knex.raw(`
        select * from tokens
        inner join users
          on users.id = tokens.user_id
        where tokens.token = ?
      `, [token]);

      if (!userInfo) {
        throw new Error('NOT AUTHORIZED');
      }

      ctx.state.user = userInfo;

      return next();
    }


    throw new Error('NOT AUTHORIZED');
  });


  app.use(router.routes());
  app.use(router.allowedMethods());
  

  app.use(async (ctx) => {
    ctx.body = {
      Message: 'Welcome to the Backend'
    }

    ctx.status = 200;
  });

  app.listen(HTTP_PORT, () => {
    console.log(`servere started at port ${HTTP_PORT}`)
  });
}

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

