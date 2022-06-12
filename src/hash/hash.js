import fs from 'fs';
import { stdout } from 'process';
import crypto from 'crypto';
import { isExist } from '../support/isExist.js';
import { isDirectory } from '../support/isDirectory.js';
import { transformPath } from '../transformPath.js';
import { writeCurrentDir } from '../greetings/greetings.js';

export const printHashInfo = async (answer) => {
  try {
    const filePath = answer.slice(4).trim();
    if (!filePath) {
      throw new Error('Invalid input');
    }
    const updatedPath = transformPath(0, filePath);
    if (!isExist(updatedPath) || isDirectory(updatedPath)) {
      throw new Error('Operation failed');
    }
    let info = '';
    const readable = fs.createReadStream(updatedPath, 'utf-8');
    const key = 'secret';
    const sha256 = crypto.createHmac('sha256', key);
    readable.on('data', (data) => {
      info += data;
    });
    readable.on('error', (err) => {
      throw new Error('Operation failed');
    });
    readable.on('end', async () => {
      const hash = await sha256.update(info).digest('hex');
      console.log('hash:', hash);
      writeCurrentDir();
    });
  } catch (e) {
    console.log(e.message);
  }
};
