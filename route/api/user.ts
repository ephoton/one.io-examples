import { Context } from 'koa';
import { validator, ResponseInfo, Tocken, get, post } from 'one.io';
import { isAlphanumeric } from 'validator';

import { UserPermission, UserPermissions } from './../lib/permission';

export default class User {
  // methods: 'get' | 'post' | 'put' | 'head' | 'delete'
  @get<UserPermission>({
    // path: 'user/register',
    // permission: UserPermissions.none
  })
  @validator({
    name: isAlphanumeric,
    password: isAlphanumeric
  })
  static async userRegister(ctx: Context, next: Function): Promise<ResponseInfo> {
    const { query } = ctx;
    const { name, password } = query;

    return {
      success: true,
      code: 1000,
      message: 'User resgisted successfully.',
      data: {}
    };
  }
}
