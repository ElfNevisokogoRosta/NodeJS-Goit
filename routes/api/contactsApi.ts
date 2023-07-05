import express from "express";
import { controller } from "../../controller/contactController";
import { validate } from "../../middlewars/index";
import { contactSchema } from "../../shcemas/contacts";

const contactsRoute = express.Router();
const { getAll, getByID, putContact, postNewContact, deleteContact } =
  controller;

contactsRoute.get("/", getAll);
contactsRoute.get("/:id", getByID);
contactsRoute.post("/", validate(contactSchema), postNewContact);
contactsRoute.put("/:id", validate(contactSchema), putContact);
contactsRoute.delete("/:id", deleteContact);
export { contactsRoute };
