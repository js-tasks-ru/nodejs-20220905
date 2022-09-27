function sum(a, b, cb) {
    if (a < 3) {
        // process.nextTick(() => {
        cb(new Error('a must be greater than 3'));
        // });
        return;
    }

    setTimeout(() => {
        cb(null, a + b);
    }, 200);
}

sum(1, 2, (err, result) => {
    console.log('err', err, 'result', result);
});

console.log('boom!');