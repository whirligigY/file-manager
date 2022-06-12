import fs from 'fs';

export const isExist = (path) => {
  try {
    return fs.existsSync(path);
  } catch (err) {
    console.log('Operation failed');
  }
};
