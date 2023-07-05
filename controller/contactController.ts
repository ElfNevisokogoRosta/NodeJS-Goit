import { contacts } from "../models";
import { HTTPError, contactRouteDec } from "../utils";

const {
  listContacts,
  getContactByID,
  removeContact,
  addContact,
  updateContact,
} = contacts;

const getAll = async (req, res) => {
  const contacts = await listContacts();
  res.json(contacts);
};
const getByID = async (req, res) => {
  const contactId = req.params.id;
  const contact = await getContactByID(contactId);
  if (contact) {
    return res.json(contact);
  }
  throw HTTPError(404, "Not found");
};
const postNewContact = async (req, res) => {
  const contactData = req.body;
  const newContact = await addContact(contactData);
  return res.status(201).json(newContact);
};
const putContact = async (req, res) => {
  const contactId = req.params.id;
  const contactData = req.body;
  const updatedContact = await updateContact(contactId, contactData);
  if (!updatedContact) {
    throw HTTPError(404, "Contact not found");
  }
  return res.status(200).json(updatedContact);
};

const deleteContact = async (req, res) => {
  const contactId = req.params.id;
  const deletedContact = await removeContact(contactId);
  if (deletedContact) {
    return res.status(200).json(deletedContact);
  }
  throw HTTPError(404, "Contact not found");
};
const controller = {
  getAll: contactRouteDec(getAll),
  getByID: contactRouteDec(getByID),
  postNewContact: contactRouteDec(postNewContact),
  putContact: contactRouteDec(putContact),
  deleteContact: contactRouteDec(deleteContact),
};
export { controller };
