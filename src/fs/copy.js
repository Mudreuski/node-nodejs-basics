import { mkdir, readdir, createReadStream, createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const _dirname = resolve(dirname(fileURLToPath(import.meta.url)));
    const baseDir = resolve(_dirname, 'files');
    const copyDir = resolve(_dirname, 'files_copy');

    mkdir(resolve(copyDir), err => {
        if(err) throw new Error('FS operation failed');

        readdir(baseDir, (err, files) => {
            if(err) throw new Error('FS operation failed');

            files.forEach(file => createReadStream(resolve(baseDir, file)).pipe(createWriteStream(resolve(copyDir, file))));
        });
    });
};

await copy()
