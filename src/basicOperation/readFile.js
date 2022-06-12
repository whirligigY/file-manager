import fs from 'fs';
import { stdout } from 'process';
import { EOL } from 'os';
import { isExist } from '../support/isExist.js';
import { isDirectory } from '../support/isDirectory.js';
import { writeCurrentDir } from '../greetings/greetings.js';
import { transformPath } from '../transformPath.js';

export const readFile = async (answer) => {
  try {
    const newPath = transformPath(3, answer);
    if (!newPath) {
      console.log('Invalid input');
      return;
    }
    if (!isExist(newPath) || isDirectory(newPath)) {
      console.log('Operation failed');
      return;
    }

    let output = '';
    const readable = fs.createReadStream(newPath, 'utf-8');
    readable.on('data', (chunk) => {
      stdout.write(chunk + EOL);
    });
    readable.on('error', (err) => {
      console.log('Operation failed');
    });
    readable.on('close', () => {
      writeCurrentDir();
    });
  } catch (e) {}
};
