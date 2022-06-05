import { rm } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/fileToRemove.txt');

    rm(pathToFile, err => {
        if (err) throw new Error('FS operation failed');
    });
};

await remove();
