"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const one_io_1 = require("one.io");
class UserPermission extends one_io_1.Permission {
    constructor(groups) {
        super(groups);
    }
    getUserPermissionByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new UserPermission(['none']);
        });
    }
}
exports.UserPermission = UserPermission;
exports.UserPermissions = {
    none: new UserPermission(['none']),
    guest: new UserPermission(['guest']),
    admin: new UserPermission(['admin'])
};
//# sourceMappingURL=permission.js.map