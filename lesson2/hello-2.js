var http = require('http');
var server = http.createServer().listen(8888);
server.on('request',function(reg, res){
    res.writeHead(200);
    res.write('Hello');
    res.end('The end');
});
server.on('request',function(reg, res){
    var x = require('url').parse(req.url, true);
    console.log(x);
    console.log('Request:', reg.method, reg.url);
});
server.on('listening',function(){
    console.log('Listen: 8888...');
});
