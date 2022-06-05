export const parseArgs = () => {
    const result = [];

    process.argv.slice(2).forEach( item => {
        if (item.startsWith('--')) result.push(item.slice(2));
        else result[result.length - 1] = `${result[result.length - 1]} is ${item}`;
    });

    console.log(result.join(', '));
};

parseArgs();
