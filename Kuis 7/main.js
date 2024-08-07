const EventEmitter = require('events');

const emitter = new EventEmitter();

const listener1 = () => {
  console.log('listener1 executed.');
}

const listener2 = () => {
  console.log('listener2 executed.');
}

// Mendaftarkan listener1 ke event 'connect' yang hanya dipanggil sekali
emitter.once('connect', listener1);

// Mendaftarkan listener2 ke event 'connect'
emitter.on('connect', listener2);

// Mendaftarkan listener1 ke event 'disconnect'
emitter.on('disconnect', listener1);

// Membangkitkan event 'connect'
emitter.emit('connect');

// Membangkitkan event 'disconnect'
emitter.emit('disconnect');
