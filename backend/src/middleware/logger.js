export default async function logger(ctx, next) {
    console.log(`Request: ${ctx.method}, ${ctx.url}, ${ctx.body}`);
    await next();
    console.log(`Response: ${ctx.status}`);
};
