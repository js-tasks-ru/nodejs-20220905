let i = 0;

const obj = {};

function handler(req, res) {
    obj[Date.now()] = '*'.repeat(100000).split('');

    i++;
    res.end(i.toString());
}

module.exports = handler;