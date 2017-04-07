var event = require('events').EventEmitter;
var logger = new event();
var users = [], msgs = [];

logger.on('login', function(name){
    console.log('New user:', name);
    users.push(name);    
});
logger.on('message', function(msg){
    console.log('New message:', msg);
    msgs.push(msg);
});
logger.on('getUsers', function(){
    console.log('--------\nUsers:\n----------');
    console.log(users.join('\n'));
})
logger.on('getMsgs', function(){
    console.log('--------\nMessages:\n----------');
    console.log(msgs.join('\n'));
})
///////////////////////////////////////////
logger.emit('login', 'John');
logger.emit('message', 'Hello from John');
logger.emit('login', 'Mike');
logger.emit('message', 'Hello from Mike');
logger.emit('login', 'Andre');
logger.emit('message', 'Hello from Andre');
logger.emit('login', 'Smit');
logger.emit('message', 'Hello from Smit');
logger.emit('login', 'Boris');
logger.emit('message', 'Hello from Boris');
logger.emit('getUsrs');
logger.emit('getMsgs');