import { pipeline, Transform } from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).trim().split('').reverse().join(''));
        }
    });

    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        err => console.log(err)
    )
};

await transform();
