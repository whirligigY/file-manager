import { fileURLToPath } from 'url';
import path from 'path';

export const getPath = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.join(__filename);

  return { __filename, __dirname };
};
