import { access, writeFile } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/fresh.txt');

    access(pathToFile, (err) => {
        if (err) {
            writeFile(pathToFile, 'I am fresh and young', (err) => {
                if(err) throw new Error(err.message);
            });
        } else  {
            throw new Error('FS operation failed');
        }
    });
};

await create()
