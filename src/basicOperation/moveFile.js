import fs from 'fs';
import { transformPath } from '../transformPath.js';
import { isExist } from '../support/isExist.js';
import { isDirectory } from '../support/isDirectory.js';

export const moveFile = async (answer) => {
  try {
    const arrayFromAnswer = answer.split(' ');
    if (arrayFromAnswer.length < 3) {
      throw new Error('Invalid input');
    }
    const filePath = transformPath(0, arrayFromAnswer[1]);
    const arrFromFileName = filePath.split('/');
    const fileName = arrFromFileName[arrFromFileName.length - 1];
    const fileDir = transformPath(0, arrayFromAnswer[2]);

    if (!isExist(filePath) || !isExist(fileDir) || !isDirectory(fileDir)) {
      throw new Error('Operation failed');
    }
    const redable = fs.createReadStream(filePath);
    const writable = fs.createWriteStream(fileDir + '/copy_' + fileName);
    redable.pipe(writable);
    redable.on('end', () => {
      fs.unlink(filePath, (err) => {
        if (err) throw new Error('Operation failed');
      });
    });
  } catch (e) {
    console.log(e.message);
  }
};
