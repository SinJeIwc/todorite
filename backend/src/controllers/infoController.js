export async function welcome(ctx) {
  ctx.body = {
    Message: 'Welcome to the Backend'
  };
  ctx.status = 200;
};
