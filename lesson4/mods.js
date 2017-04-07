/**
 * Created by User on 07.04.2017.
 */

var h = require('./say-hello');
var w = require('./say-world');
var mod = require('./my-module');

require('./say-hello')();
h();
w.world();
require('./say-world').world();
mod.foo();
mod.bar();