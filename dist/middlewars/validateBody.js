"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const utils_1 = require("../utils");
const validate = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next((0, utils_1.HTTPError)(400, error.message));
        }
        next();
    };
    return func;
};
exports.validate = validate;
//# sourceMappingURL=validateBody.js.map