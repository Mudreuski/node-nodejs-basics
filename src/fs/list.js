import { readdir } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
    const targetDirname = resolve(dirname(fileURLToPath(import.meta.url)), 'files');

    readdir(targetDirname, (err, files) => {
        if(err) throw new Error('FS operation failed');

        console.log(files);
    });
};

await list();
