import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

export const write = async () => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/fileToWrite.txt');
    const stream = createWriteStream(pathToFile, 'utf8');

    process.stdin.pipe(stream);
};

await write();
