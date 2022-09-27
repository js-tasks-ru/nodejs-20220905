import http from 'node:http';

import Replacer from './replacer.js';

const server = new http.Server();

/**
 * GET / -> hello world
 * POST /replace -> яблоко груша
 */

server.on('request', (req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');

    if (req.method === 'POST' && url.pathname === '/replace') {
        const from = url.searchParams.get('from');
        const to = url.searchParams.get('to');

        const replacer = new Replacer({ from, to });

        req.pipe(replacer).pipe(res);

        return;
    }


    res.end('hello world');
});

export default server;