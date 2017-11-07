import { Permission } from 'one.io';
export declare class UserPermission extends Permission {
    constructor(groups: string[]);
    getUserPermissionByName(name: string): Promise<UserPermission>;
}
export declare const UserPermissions: {
    none: UserPermission;
    guest: UserPermission;
    admin: UserPermission;
};
