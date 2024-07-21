import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = createFakeContact();
    await fs
      .readFile('db.json', 'utf-8')
      .then((data) => [...JSON.parse(data), { id: 4, name: 'Name 4' }])
      .then((data) =>
        fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2), 'utf-8'),
      );
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
