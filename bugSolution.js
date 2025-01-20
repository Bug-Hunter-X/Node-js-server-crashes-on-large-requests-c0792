const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      res.writeHead(200);
      res.end('OK');
    });
  } else {
    res.writeHead(405);
    res.end();
  }
});

server.listen(3000);