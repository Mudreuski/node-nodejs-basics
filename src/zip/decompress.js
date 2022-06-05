import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export const decompress = async () => {
    const targetDir = resolve(dirname(fileURLToPath(import.meta.url)), 'files');
    const unzip = createUnzip();
    const source = createReadStream(resolve(targetDir, 'archive.gz'));
    const destination = createWriteStream(resolve(targetDir, 'fileToCompress.txt'));


    pipeline(
        source,
        unzip,
        destination,
        err => console.log(err)
    );
};

await decompress();
