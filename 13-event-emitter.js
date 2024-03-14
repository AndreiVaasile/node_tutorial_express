const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',()=>{
    console.log(`data received1 `);
})
customEmitter.on('response',()=>{
    console.log(`data recevied2 `);
})


customEmitter.emit('response');

