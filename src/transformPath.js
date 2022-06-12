import process from 'process';

export const transformPath = (length, answer) => {
  const filePath = answer.slice(length).trim();
  if (!filePath) {
    return;
  }
  let newPath = filePath;
  if (filePath.indexOf('/') === -1) {
    newPath = process.env.CURRENTDIR + '/' + filePath;
  }
  newPath = newPath.replace('//', '/');
  return newPath;
};
