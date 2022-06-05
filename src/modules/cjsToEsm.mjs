import { readFileSync } from 'fs';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { dirname, resolve, sep } from 'path';
import { fileURLToPath } from 'url';

const random = Math.random();
const currentDir = resolve(dirname(fileURLToPath(import.meta.url)));

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(readFileSync(resolve(currentDir, 'files/a.json'), 'utf8'));
} else {
    unknownObject = JSON.parse(readFileSync(resolve(currentDir, 'files/b.json'), 'utf8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${resolve(currentDir, 'cjsToEsm.mjs')}`);
console.log(`Path to current directory is ${currentDir}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

