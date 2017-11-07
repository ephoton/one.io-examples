
import * as Koa from 'koa';
import * as Views from 'koa-views';
import * as Path from 'path';

import { Router } from 'one.io';

const App = new Koa();
const router = new Router({
  apiPath: './build/route/api',
  routePath: './build/route/page'
});

App.use(Views(__dirname + './../views', {
  extension: 'hbs',
  map: {
    hbs: 'handlebars'
  }
}));

router.routes(App);

App.on('error', (err: any, ctx: Koa.Context) => {
  console.log('server error', err, ctx);
});

App.listen(3000);

