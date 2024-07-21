import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async () => {
  try {
    const data = createFakeContact();
    await fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2), 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
