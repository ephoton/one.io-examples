import { Permission } from 'one.io';

export class UserPermission extends Permission {
    constructor(groups: string[]) {
        super(groups);
    }

    async getUserPermissionByName(name: string): Promise<UserPermission> {
      // get permission by user name
      return new UserPermission(['none']);
    }
}

// then build your permissions.
export const UserPermissions = {
    none: new UserPermission(['none']),
    guest: new UserPermission(['guest']),
    admin: new UserPermission(['admin'])
};
