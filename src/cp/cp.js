import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), 'files/script.js');
    const child = spawn('node', [pathToFile, ...args]);

    process.stdin.pipe(child.stdin);

    child.stdout.on('data', data => console.log(data.toString()));
};

await spawnChildProcess([42, 404, 500, 2022, 2077]);
