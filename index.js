var http = require('http')

http.createServer(function (req, res) {
    res.write('FUNCIONEI PORRA VAMO CARALHO')
    res.end()
}).listen(80)

console.log("rodou")