"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
const { listContacts, getContactByID, removeContact, addContact, updateContact, } = models_1.contacts;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield listContacts();
    res.json(contacts);
});
const getByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const contact = yield getContactByID(contactId);
    if (contact) {
        return res.json(contact);
    }
    throw (0, utils_1.HTTPError)(404, "Not found");
});
const postNewContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const newContact = yield addContact(contactData);
    return res.status(201).json(newContact);
});
const putContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const contactData = req.body;
    const updatedContact = yield updateContact(contactId, contactData);
    if (!updatedContact) {
        throw (0, utils_1.HTTPError)(404, "Contact not found");
    }
    return res.status(200).json(updatedContact);
});
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const deletedContact = yield removeContact(contactId);
    if (deletedContact) {
        return res.status(200).json(deletedContact);
    }
    throw (0, utils_1.HTTPError)(404, "Contact not found");
});
const controller = {
    getAll: (0, utils_1.contactRouteDec)(getAll),
    getByID: (0, utils_1.contactRouteDec)(getByID),
    postNewContact: (0, utils_1.contactRouteDec)(postNewContact),
    putContact: (0, utils_1.contactRouteDec)(putContact),
    deleteContact: (0, utils_1.contactRouteDec)(deleteContact),
};
exports.controller = controller;
//# sourceMappingURL=contactController.js.map