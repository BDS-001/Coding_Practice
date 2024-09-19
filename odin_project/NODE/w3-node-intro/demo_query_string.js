const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const q = url.parse(req.url, true).query;
  const txt = "\n" + q.year + " " + q.month + "\n";
  res.write(req.url);
  res.end(txt);
}).listen(8080);