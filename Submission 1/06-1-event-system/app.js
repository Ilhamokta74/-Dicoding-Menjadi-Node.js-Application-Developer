const EventEmitter = require('events');

const BasicMath = {
  add: (a, b) => console.log(a + b),
  subtract: (a, b) => console.log(a - b),
};

// Tulis kodemu di bawah ini ...
const eventEmitter = new EventEmitter();

// menambahkan listener
eventEmitter.on('calculate', BasicMath.add)
eventEmitter.once('calculate', BasicMath.subtract)

// bangkitkan event
eventEmitter.emit('calculate', 2, 3)
eventEmitter.emit('calculate', 5, 6)