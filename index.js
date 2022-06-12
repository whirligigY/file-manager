import process, { stdin as input, stdout as output } from 'process';
import redline from 'readline';
import {
  sayHello,
  sayBye,
  writeCurrentDir,
} from './src/greetings/greetings.js';
import { moveUpOneFolder } from './src/navigation/moveUpFolder.js';
import { getUserName } from './src/navigation/getName.js';
import { moveToFile } from './src/navigation/moveToFile.js';
import { initCurrentDir } from './src/initEnv.js';
import { readFile } from './src/basicOperation/readFile.js';
import { listDirFiles } from './src/navigation/listFiles.js';
import { addFile } from './src/basicOperation/addFile.js';
import { copyFile } from './src/basicOperation/copyFile.js';
import { renameFile } from './src/basicOperation/renameFile.js';
import { moveFile } from './src/basicOperation/moveFile.js';
import { removeFile } from './src/basicOperation/removeFile.js';
import { getOSInfo } from './src/os/os.js';
import { printHashInfo } from './src/hash/hash.js';

const readLine = redline.createInterface({ input, output });

getUserName();
sayHello(process.env.USERNAME);
initCurrentDir();
writeCurrentDir();

readLine.on('SIGINT', () => {
  sayBye();
  readLine.close();
});

readLine.on('line', async (answer) => {
  try {
    if (answer.toLocaleLowerCase() === '.exit') {
      sayBye();
      readLine.close();
    } else if (answer.trim() === 'up') {
      moveUpOneFolder();
      writeCurrentDir();
    } else if (answer.startsWith('cd')) {
      await moveToFile(answer);
      writeCurrentDir();
    } else if (answer.trim() === 'ls') {
      await listDirFiles();
      writeCurrentDir();
    } else if (answer.startsWith('cat')) {
      await readFile(answer);
    } else if (answer.startsWith('add')) {
      addFile(answer);
      writeCurrentDir();
    } else if (answer.startsWith('rn')) {
      renameFile(answer);
      writeCurrentDir();
    } else if (answer.startsWith('cp')) {
      copyFile(answer);
      writeCurrentDir();
    } else if (answer.startsWith('mv')) {
      moveFile(answer);
      writeCurrentDir();
    } else if (answer.startsWith('rm')) {
      removeFile(answer);
      writeCurrentDir();
    } else if (answer.startsWith('os')) {
      getOSInfo(answer);
      writeCurrentDir();
    } else if (answer === '') {
      console.log('Please type the command');
    } else {
      throw new Error('Invalid input');
    }
  } catch (e) {
    console.log(e.message);
  }
});
