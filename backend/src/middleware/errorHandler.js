export default async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (e) {
    if (e.isJoi) {
      console.log('Joi error: ', e.message);
      ctx.status = 400;
      ctx.body = {
        errors: e.details
      };

    return;
    }

    console.log('Error', e.message);

    ctx.status = e.status || 500;
    ctx.body = {
      message: e.message
    };
  }
}
