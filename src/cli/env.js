export const parseEnv = () => {
    const result = [];

    Object.keys(process.env).forEach( key => {
        if (key.match(/^RSS_/)) result.push(`${key}=${process.env[key]}`);
    });

    console.log(result.reverse().join('; '));
};

parseEnv();
