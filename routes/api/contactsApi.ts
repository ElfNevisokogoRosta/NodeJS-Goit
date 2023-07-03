import express from "express";
import {
  listContacts,
  getContactByID,
  addContact,
  updateContact,
  removeContact,
} from "../../models/contacts";
import Joi from "joi";
import { HTTPError } from "../../utils/HTTPError";

const contactsRoute = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

contactsRoute.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.json(contacts);
  } catch (e) {
    next(e);
  }
});

contactsRoute.get("/:id", async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const contact = await getContactByID(contactId);
    if (contact) {
      return res.json(contact);
    }
    throw HTTPError(404, "Not found");
  } catch (e) {
    next(e);
  }
});

contactsRoute.post("/", async (req, res, next) => {
  const contactData = req.body;

  try {
    const { error } = addSchema.validate(contactData);
    console.log(error);
    if (error) {
      throw HTTPError(400, error.message);
    }
    const newContact = await addContact(contactData);
    return res.status(201).json(newContact);
  } catch (e) {
    next(e);
  }
});
contactsRoute.put("/:id", async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const contactData = req.body;
    const { error } = addSchema.validate(contactData);
    if (error) {
      throw HTTPError(400, error.message);
    }
    const updatedContact = await updateContact(contactId, contactData);
    if (updateContact) {
      return res.status(200).json(updatedContact);
    }
    throw HTTPError(404, "Contact not found");
  } catch (e) {
    next(e);
  }
});
contactsRoute.delete("/:id", async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const deletedContact = await removeContact(contactId);
    if (deletedContact) {
      return res.status(200).json(deletedContact);
    }
    throw HTTPError(404, "Contact not found");
  } catch (e) {
    next(e);
  }
});
export { contactsRoute };
