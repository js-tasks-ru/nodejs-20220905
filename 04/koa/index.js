import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const application = new Koa();
const router = new Router();

application.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));

application.use(async (ctx, next) => {
    console.time('request');

    await next();

    console.timeEnd('request');
});

router.get('/subscibe', async (ctx, next) => {
    await new Promise(resolve => {});
});

router.get('/', async (ctx, next) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    ctx.body = ["hello world"];
});

router.post('/upload', async (ctx, next) => {
    console.log(ctx.request.body);

    ctx.body = 'ok';
});

router.post('/create', async (ctx, next) => {
    
});

router.get('/2nd', async (ctx, next) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    ctx.body = '2nd handler';
});

application.use(router.routes());

application.listen(3000);