import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import cors from 'koa-cors';

import { getKnex } from './utils/knex.js';
import { HTTP_PORT } from './utils/config.js';

import {userRouter} from './routes/userRoutes.js';
import {authRouter} from './routes/authRoutes.js';

import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import authChecker from './middleware/authChecker.js';


async function main() {
  console.log('start', new Date());

  const knex = await getKnex();
  const app = new Koa();

  // Allows connections from FrontEnd server
  app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(bodyparser());
  app.use(errorHandler);
  app.use(logger);

  app.use(authRouter.routes());
  app.use(authChecker);
  
  app.use(userRouter.routes());
  app.use(userRouter.allowedMethods());

  app.use(async (ctx) => {
    ctx.body = {
      Message: 'Welcome to the Backend'
    }
    ctx.status = 200;
  });

  app.listen(HTTP_PORT, () => {
    console.log(`Server started at port: ${HTTP_PORT}`)
  });
}

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

