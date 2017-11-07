import { Context } from 'koa';
import { validator, ResponseInfo, Tocken, get, post, route } from 'one.io';
import { isAlphanumeric } from 'validator';

import { UserPermission, UserPermissions } from './../lib/permission';

export default class Index {
  @route<UserPermission>({
    // permission: UserPermissions.none
  })
  static async userLogin(ctx: Context, next: Function) {
    const { query } = ctx;
    const { name, password } = query;

    return {
      title: 'one.io'
    };
  }
}
