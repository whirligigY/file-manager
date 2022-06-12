import fs from 'fs';

export const isDirectory = (data) => {
  try {
    let stat = fs.lstatSync(data);
    return stat.isDirectory();
  } catch (e) {
    console.log('Operation failed');
    return false;
  }
};
