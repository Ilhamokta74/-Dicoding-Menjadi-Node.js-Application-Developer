function properCase(value, callback) {
    setTimeout(() => {
      if (typeof value !== 'string') {
        callback(new Error('value harus bertipe string'));
        return;
      }
    
      const result = value
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');
  
      callback(null, result);
    }, 100);
  }
  
  module.exports = {
    properCase,
  };