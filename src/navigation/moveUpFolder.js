import process from 'process';
import { putVariableToEnv } from '../support/moveToEnv.js';

const moveUpOneFolder = async () => {
  let separator = '/';
  const arrFromCurrentDir = process.env.CURRENTDIR.split(separator);
  const parentDirPath = arrFromCurrentDir.slice(0, -1).join('/');
  putVariableToEnv('CURRENTDIR', parentDirPath !== '' ? parentDirPath : '/');
};

export { moveUpOneFolder };
