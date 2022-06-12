import fs from 'fs';
import { transformPath } from '../transformPath.js';
import { isExist } from '../support/isExist.js';
import { isDirectory } from '../support/isDirectory.js';

export const removeFile = (answer) => {
  try {
    const arrayFromAnswer = answer.split(' ');
    if (arrayFromAnswer.length < 2) {
      throw new Error('Invalid input');
    }
    const filePath = transformPath(0, arrayFromAnswer[1]);

    if (!isExist(filePath) && isDirectory(filePath)) {
      throw new Error('Operation failed');
    }
    fs.unlink(filePath, (err) => {
      if (err) {
        throw new Error('Operation failed');
      }
      console.log('File has been Deleted');
    });
  } catch (e) {
    console.log(e.message);
  }
};
