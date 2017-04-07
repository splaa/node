var http = require('http');
var server = http.createServer().listen(8080);
server.on('request', function(req, res){
    console.log('Request:', req.method, req.url);
    console.log('STATUS', res.statusCode);
});
server.on('request', function(req,res){
   
   if(req.url == '/stop'){
    // req.connection.destroy();
    res.writeHead(200, {'Connection':'close'});
    server.close();
    
   }else{
    res.writeHead(200);
    res.write('Hello from Node.js');
    res.end('The end');
   }
});
server.on('close',function(){
    console.log('The end');
})
server.on('listening', function(){
    console.log('Соединение на 8080 порту...')
})
server.on('connection',function(){
    console.log('Connection...');
})