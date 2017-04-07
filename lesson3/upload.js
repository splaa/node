
var fs = require('fs');
var http = require('http').createServer().listen(8080);
http.on('request', function(req, res){
    res.writeHead(200);
    res.write('START');
    var newFile = fs.createWriteStream('file-3.txt');
    // req.pipe(newFile);
    req.on('data', function(txt){
        txt = 'NEW: ' + txt;
        newFile.write(txt);
    });
    res.on('end',function(){
        res.end('UPLOADED!');
    })
   
});
