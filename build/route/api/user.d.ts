/// <reference types="koa" />
/// <reference types="koa-views" />
import { Context } from 'koa';
import { ResponseInfo } from 'one.io';
export default class User {
    static userRegister(ctx: Context, next: Function): Promise<ResponseInfo>;
}
