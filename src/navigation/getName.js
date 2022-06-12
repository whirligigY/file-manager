import process from 'process';
import { putVariableToEnv } from '../support/moveToEnv.js';

export const getUserName = () => {
  const args = process.argv;
  args.splice(0, 2);
  args.forEach((arg) => {
    if (arg.startsWith('--username')) {
      const Username = arg.split('=')[1];
      putVariableToEnv('USERNAME', Username);
    }
  });
};
