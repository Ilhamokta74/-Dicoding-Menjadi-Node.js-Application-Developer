const { opA, opB, opC } = require('./utils');

function main() {
  // @TODO panggil fungsi opA, opB, opC secara serial
   opA((A) => {
    console.log(A);

    opB((B) => {
        console.log(B);

        opC((C) => {
            console.log(C);
          });
      });
  });
}

main();