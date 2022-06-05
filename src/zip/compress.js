import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const compress = async () => {
    const targetDir = resolve(dirname(fileURLToPath(import.meta.url)), 'files');
    const gzip = createGzip();
    const source = createReadStream(resolve(targetDir, 'fileToCompress.txt'));
    const destination = createWriteStream(resolve(targetDir, 'archive.gz'));

    pipeline(
        source,
        gzip,
        destination,
        err => console.log(err)
    );
};

await compress();
