import fs from 'fs';
import { transformPath } from '../transformPath.js';
import { isExist } from '../support/isExist.js';

export const renameFile = (answer) => {
  try {
    const arrayFromAnswer = answer.split(' ');
    if (arrayFromAnswer.length < 3) {
      throw new Error('Invalid input');
    }
    const newFileName = arrayFromAnswer[2];
    const prevPath = transformPath(0, arrayFromAnswer[1]);
    const nextPath =
      prevPath.split('/').slice(0, -1).join('/') + '/' + newFileName;

    if (!isExist(prevPath)) {
      throw new Error('Operation failed');
    }
    fs.rename(prevPath, nextPath, (err) => {
      if (err) throw 'Error in renaming file';
      console.log('File renamed');
    });
  } catch (e) {
    console.log(e.message);
  }
};
