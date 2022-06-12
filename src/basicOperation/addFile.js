import fs from 'fs';
import { transformPath } from '../transformPath.js';
import { isExist } from '../support/isExist.js';

export const addFile = (answer) => {
  try {
    const newPath = transformPath(3, answer);
    if (!newPath) {
      throw new Error('Invalid input');
    }

    if (isExist(newPath)) {
      throw new Error('Operation failed');
    }
    fs.open(newPath, 'wx', (err, func) => {
      if (err) throw 'Operation failed';
      console.log('File created');
    });
  } catch (e) {
    console.log(e.message);
  }
};
