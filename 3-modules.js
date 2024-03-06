//Modules - encapsulated code (only share minimum)
//CommonJS, every file is module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); //daca avem o functie apelata deja in fisierul respectiv, nu mai trebuie sa o apelam aici, se va apela automat


// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);
