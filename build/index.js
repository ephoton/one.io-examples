"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Views = require("koa-views");
const one_io_1 = require("one.io");
const App = new Koa();
const router = new one_io_1.Router({
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
App.on('error', (err, ctx) => {
    console.log('server error', err, ctx);
});
App.listen(3000);
//# sourceMappingURL=index.js.map