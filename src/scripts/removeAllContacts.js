import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const clearContacts = [];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(clearContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
