import { promises as fs } from 'fs';

// eslint-disable-next-line import/prefer-default-export
export const getLocalData = async ({ file }) => {
  const fileJSON = await fs.readFile(process.cwd() + file, 'utf8');
  const data = JSON.parse(fileJSON);
  return data;
};
