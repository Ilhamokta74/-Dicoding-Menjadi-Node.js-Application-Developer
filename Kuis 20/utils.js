function properCaseProm(value) {
  return new Promise((resolve, reject) => {
    if (typeof value !== 'string') {
      return reject(new Error('value harus bertipe string'));
    }

    const result = value
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');

    return resolve(result);
  });
}

module.exports = {
  properCaseProm,
};