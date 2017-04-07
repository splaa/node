/**
 * Created by User on 07.04.2017.
 */
var http = require('http');

http.createServer(function (request, response) {
    console.log('Server listen');
    response.writeHead(200);
    request.on('data', function (data) {
        console.log('Request: ', data.toString());
        response.write('Write: '+ data.toString());
    });
    request.on('end', function () {
        console.log('The End!');
    });
    //response.end();
}).listen(8080);