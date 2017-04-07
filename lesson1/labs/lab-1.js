var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){
    response.writeHead(200,{
        'Content-type':'text/html;charset=utf-8'
    });
    response.write('Привет от Андрея!');
    fs.readFile('index.html', function(err, content){
        response.write(decodeURIComponent(content));
        response.end('The End!');
})
    

}).listen(8080);