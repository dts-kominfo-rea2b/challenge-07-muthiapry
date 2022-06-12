const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

// buat promise pake resolve,reject
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == "") {
      reject("Gagal Load Data!");
    } else if (emosi == "marah") {
      (async () => {
        const bioskopIXX = Count(await promiseTheaterIXX(), emosi);
        const bioskopVGC = Count(await promiseTheaterVGC(), emosi);

        resolve(bioskopIXX + bioskopVGC);
      })();
    } else if (emosi == "tidak marah") {
      (async () => {
        const bioskopIXX = Count(await promiseTheaterIXX(), emosi);
        const bioskopVGC = Count(await promiseTheaterVGC(), emosi);

        resolve(bioskopIXX + bioskopVGC);
      })();
    }
  });
};

const Count = (data, emosi) => {
  let looping = 0;

  if (emosi == "marah") {
    for (i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        looping++;
      }
    }
  } else {
    for (i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        looping++;
      }
    }
  }
  return looping;
};

module.exports = {
  promiseOutput,
};
