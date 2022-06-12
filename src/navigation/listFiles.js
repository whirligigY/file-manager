import process from 'process';
import fs from 'fs';
import { isExist } from '../support/isExist.js';

const listDirFiles = async () => {
  try {
    const dirPath = process.env.CURRENTDIR;
    if (!isExist(dirPath)) {
      console.log('Operation failed');
      return;
    }
    const files = await fs.promises.readdir(dirPath);
    try {
      const res = [];
      files.forEach((file) => {
        //console.log(file);
        res.push(file);
      });
      console.log(res);
    } catch (e) {}
  } catch (e) {}
};

export { listDirFiles };
