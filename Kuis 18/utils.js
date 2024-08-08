function properCaseSync(value) {
    if (typeof value !== 'string') {
      throw new Error('value must be a string');
    }
  
    return value
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  }
  
  module.exports = {
    properCaseSync,
  };