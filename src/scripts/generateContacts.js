import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    const contacts = JSON.parse(data);

    for (let i = 1; i <= number; i += 1) {
      const newContacts = createFakeContact();
      contacts.push(newContacts);
    }

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, undefined, 2),
      'utf-8',
    );
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
