import { createReadStream } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/fileToRead.txt');

    createReadStream(pathToFile, 'utf8').on('data', data => process.stdout.write(data));
};

await read();
