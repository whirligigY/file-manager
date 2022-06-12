import process from 'process';

export const putVariableToEnv = (prop, val) => {
  process.env[prop] = val;
};
