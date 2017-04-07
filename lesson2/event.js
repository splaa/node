var events = require('events');
var EventEmitter = events.EventEmitter;

var test = new EventEmitter();
test.on('myEvent', onMyEvent);
//
// function onMyEvent(param) {
//     console.log(param);
// }

// test.emit('myEvent', 'Test number one');
// test.emit('myEvent', 'Test number two');
//  ..параметр обьект
// function onMyEvent(param) {
//     console.log(param.name, param.age);
// }
//
// test.emit('myEvent', {name:'John', age:25});


//  ..Несколько параметров
function onMyEvent(param) {
    console.log(arguments[0], arguments[1]);
}

test.emit('myEvent','one', 'two');