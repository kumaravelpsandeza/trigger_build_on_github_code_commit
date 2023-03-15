const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    } else {
      // Serve the HTML file
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});