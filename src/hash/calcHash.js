import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/fileToCalculateHashFor.txt');

    readFile(pathToFile,'utf8',(err, data) => {
        const hash = createHash('sha256').update(data).digest('hex');

        console.log(hash);
        return hash;
    });
};

await calculateHash();
