const url = require('url')
const fs = require('fs')
const http = require('http')

http.createServer(function (req, res) {
    const q = url.parse(req.url, true)
    const filename = '.' + q.pathname
    fs.readFile(filename, function (err, data) {
        if (err) {
            console.log(err)
            console.log(filename)
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)
