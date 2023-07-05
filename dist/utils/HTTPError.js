"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
class ErrorWithStatus extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
function HTTPError(status, message) {
    const e = new ErrorWithStatus(message, status);
    console.log(e);
    return e;
}
exports.HTTPError = HTTPError;
//# sourceMappingURL=HTTPError.js.map