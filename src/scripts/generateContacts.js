import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

fs.writeFile('db.json', JSON.stringify(createFakeContact, undefined, 2))
  .then(console.log)
  .catch(console.error);

const generateContacts = async (number) => {};

generateContacts(5);
