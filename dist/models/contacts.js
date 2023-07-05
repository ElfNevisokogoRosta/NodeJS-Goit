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
exports.updateContact = exports.addContact = exports.removeContact = exports.getContactByID = exports.listContacts = void 0;
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "contacts.json");
const listContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield fs.readFile(contactsPath);
    return JSON.parse(contacts);
});
exports.listContacts = listContacts;
const getContactByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const allContacts = yield listContacts();
    const contact = allContacts.find((contact) => contact.id === id);
    return contact || null;
});
exports.getContactByID = getContactByID;
const updateContact = (id, contactData) => __awaiter(void 0, void 0, void 0, function* () {
    const allContacts = yield listContacts();
    const index = allContacts.findIndex((contact) => contact.id === id);
    if (index === -1) {
        return null;
    }
    allContacts[index] = Object.assign({ id }, contactData);
    yield fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return allContacts[index];
});
exports.updateContact = updateContact;
const removeContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const allContacts = yield listContacts();
    const index = allContacts.findIndex((contact) => contact.id === id);
    if (index === -1) {
        return null;
    }
    allContacts.splice(index, 1);
    yield fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return "Delete successfull";
});
exports.removeContact = removeContact;
const addContact = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    const newContact = Object.assign({ id: nanoid() }, contact);
    const allContacts = yield listContacts();
    const updatedContacts = [...allContacts, newContact];
    const updatedContactsJSON = JSON.stringify(updatedContacts, null, 2);
    yield fs.writeFile(contactsPath, updatedContactsJSON);
    return newContact;
});
exports.addContact = addContact;
//# sourceMappingURL=contacts.js.map