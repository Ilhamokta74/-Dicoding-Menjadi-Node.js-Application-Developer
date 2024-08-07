function opA(callback) {
    setTimeout(function () {
      callback('A');
    }, 800);
  }
  
  function opB(callback) {
    setTimeout(function () {
      callback('B');
    }, 400);
  }
  
  function opC(callback) {
    setTimeout(function () {
      callback('C');
    }, 200);
  }
  
  module.exports = { opA, opB, opC };