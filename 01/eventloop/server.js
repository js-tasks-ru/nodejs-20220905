const http = require('node:http');

const server = new http.Server();

//                  3s     3s   3s
// (macro)tasks : []
server.on('request', (req, res) => {
    setTimeout(() => {
        res.end('hello world');
    }, 3000);
});

server.listen(3000);