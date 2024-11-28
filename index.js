var http = require('http')

http.createServer(function (req, res) {
    res.write('BOM DIA')
    res.end()
}).listen(80)

console.log("rodou")