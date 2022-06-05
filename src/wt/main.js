import { EventEmitter } from 'events';
import os from 'os';
import { Worker } from  'worker_threads';
import * as path from 'path';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


class WorkerList extends EventEmitter {
    workerFile;
    workers = [];
    result = [];

    constructor(file) {
        super();

        this.workerFile = file;
        this.load(os.cpus().length);
    }

    load(threadsCount) {
        for (let i = 0; i < threadsCount; i++) {
            const worker = new Worker(path.resolve(this.workerFile));
            worker
                .on('message', data => this.addResult(i, 'resolved', data))
                .on('error', () => this.addResult(i, 'error', null));

            this.workers.push(worker);
        }
    }

    run(value) {
        this.workers.forEach((worker, i) => worker.postMessage(value + i));
        return this;
    }

    addResult(number, status = 'resolved', data) {
        this.result.push({ number, status, data });

        if (this.result.length === this.workers.length) {
            this.sendResults();
        }
    }

    sendResults() {
        const result = this.result
                                .sort((a, b) => a.number - b.number)
                                .map(({ status, data }) => ({ status, data }));

        this.emit('completed', result);
        this.workers.forEach(worker => worker.terminate());
    }
}


export const performCalculations = async () => {
    const currentDir = resolve(dirname(fileURLToPath(import.meta.url)));
    const list = new WorkerList(path.join(currentDir, 'worker.js'));

    list
        .on('completed', value => console.log(value))
        .run(10);
};

await performCalculations();
