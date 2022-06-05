import * as fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
    const targetDirname = resolve(dirname(fileURLToPath(import.meta.url)), 'files');
    const baseFile = resolve(targetDirname, 'wrongFilename.txt');
    const newFile = resolve(targetDirname, 'properFilename.md');

    fs.access(newFile, (err) => {
        if (err) {
            fs.rename(baseFile, newFile, (err) => {
                if (err) throw new Error('FS operation failed');
            });
        } else  {
            throw new Error('FS operation failed');
        }
    });
};

await rename();
