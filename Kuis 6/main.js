const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
  try {
    // Langkah 1: Beli kartu tol dengan argumen 25
    const card = await buyTollRoadCard(25);

    // Langkah 2: Isi saldo kartu tol dengan argumen card dan 10
    const toppedUpCard = await topUpBalance(card, 10);

    // Langkah 3: Gunakan akses jalan tol dengan argumen card yang sudah diisi saldo
    await useTollRoad(toppedUpCard);
  } catch (error) {
    // Jika ada error, tampilkan error message
    console.log(error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess();
