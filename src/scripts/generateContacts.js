import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async () => {
  const data = JSON.stringify(createFakeContact);
  //   const data = await fs.readFile(createFakeContact);

  //   console.log(data.toString('utf-8'));
  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log();
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
