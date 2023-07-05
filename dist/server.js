"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const DB_HOST = process.env.DB_HOST;
console.log(DB_HOST);
mongoose_1.default
    .connect(DB_HOST)
    .then(() => app_1.default.listen(3000, () => {
    console.log("Server running. Use our API on port 3000");
}))
    .catch((e) => {
    console.log(e);
    process.exit(1);
});
//# sourceMappingURL=server.js.map