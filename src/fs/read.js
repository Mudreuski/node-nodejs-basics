import { readFile } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/fileToRead.txt');

    readFile(pathToFile,'utf8',(err, data) => {
        if (err) throw new Error('FS operation failed');

        console.log(data);
    });
};

await read();
