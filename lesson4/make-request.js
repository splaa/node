/**
 * Created by User on 07.04.2017.
 */
var http = require('http');
var makeRequest = function (msg) {


    console.log('Rquest start');
    var options = {
        host: 'localhost',
        port: 8080,
        path: '/',
        method: 'POST'
    };
    var request = http.request(options, function (response) {
        console.log('Response start');
        response.on('data', function (data) {
            console.log(data.toString());
        });
    });

    request.write(msg);
    request.end();
}
// makeRequest('Hello, world!');

module.exports = makeRequest;