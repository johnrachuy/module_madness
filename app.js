var http = require('http');
var combine = require('./combine');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(combine.message() + combine.toMoney());
    res.end();
}).listen(3000);

console.log("Listening on port 3000");
