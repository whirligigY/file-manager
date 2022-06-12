import { isExist } from '../support/isExist.js';
import { isDirectory } from '../support/isDirectory.js';
import { putVariableToEnv } from '../support/moveToEnv.js';
import process from 'process';

const moveToFile = async (answer = 'cd Downloads') => {
  try {
    const filePath = answer.slice(2).trim();
    if (!filePath) {
      throw new Error('Invalid input');
    }
    if (filePath === '..') {
      moveUpOneFolder();
      return;
    }
    let newPath = filePath;
    if (filePath.indexOf('/') === -1) {
      newPath = process.env.CURRENTDIR + '/' + filePath;
    }
    newPath = newPath.replace('//', '/');
    if (!isExist(newPath) || !isDirectory(newPath)) {
      throw new Error('Operation failed');
    }
    putVariableToEnv('CURRENTDIR', newPath);
  } catch (e) {
    console.log(e.message);
  }
};
export { moveToFile };
