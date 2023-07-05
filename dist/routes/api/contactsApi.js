"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRoute = void 0;
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../../controller/contactController");
const index_1 = require("../../middlewars/index");
const contacts_1 = require("../../shcemas/contacts");
const contactsRoute = express_1.default.Router();
exports.contactsRoute = contactsRoute;
const { getAll, getByID, putContact, postNewContact, deleteContact } = contactController_1.controller;
contactsRoute.get("/", getAll);
contactsRoute.get("/:id", getByID);
contactsRoute.post("/", (0, index_1.validate)(contacts_1.contactSchema), postNewContact);
contactsRoute.put("/:id", (0, index_1.validate)(contacts_1.contactSchema), putContact);
contactsRoute.delete("/:id", deleteContact);
//# sourceMappingURL=contactsApi.js.map