import os from 'os';
import { putVariableToEnv } from './environment.js';

export const initCurrentDir = () => {
  putVariableToEnv('CURRENTDIR', os.homedir());
};
