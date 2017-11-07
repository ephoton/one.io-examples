/// <reference types="koa" />
/// <reference types="koa-views" />
import { Context } from 'koa';
export default class Index {
    static userLogin(ctx: Context, next: Function): Promise<{
        title: string;
    }>;
}
