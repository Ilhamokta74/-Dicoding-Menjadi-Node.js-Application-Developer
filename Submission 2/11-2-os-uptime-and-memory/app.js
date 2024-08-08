const os = require('os');

setTimeout(() => {
    // Print the uptime of the process in seconds
    console.log(process.uptime());

    // Print the uptime of the operating system in seconds
    console.log(os.uptime());

    // Print the total memory available in the operating system in bytes
    console.log(os.totalmem());

    // Print the total heap memory in bytes
    const { heapTotal } = process.memoryUsage();
    console.log(heapTotal);
}, 1000);