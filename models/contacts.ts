const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "contacts.json");

interface ContactI {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};
const getContactByID = async (id: string) => {
  const allContacts = await listContacts();
  const contact = allContacts.find(
    (contact: { id: string }) => contact.id === id
  );
  return contact || null;
};
const updateContact = async (id, contactData) => {
  const allContacts: ContactI[] = await listContacts();
  const index = allContacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id, ...contactData };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[index];
};
const removeContact = async (id: string) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((contact: ContactI) => contact.id === id);
  if (index === -1) {
    return null;
  }
  allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return "Delete successfull";
};

const addContact = async (contact: ContactI) => {
  const newContact: ContactI = { id: nanoid(), ...contact };
  const allContacts = await listContacts();
  const updatedContacts = [...allContacts, newContact];
  const updatedContactsJSON = JSON.stringify(updatedContacts, null, 2);
  await fs.writeFile(contactsPath, updatedContactsJSON);
  return newContact;
};
export {
  listContacts,
  getContactByID,
  removeContact,
  addContact,
  updateContact,
};
