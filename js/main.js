// THIS GAME IS FOR PRACTICE YOUR CODDING IN JS

let juego = ["piedra", "papel", "tijera"];

const juegaIA = () => {
  let juegaIA1 = Math.floor(Math.random() * 3);
  return juego[juegaIA1];
};

const juegaP = (opcion) => {
  let juegaPlayer = opcion;
  let juegaCompu = juegaIA();
  console.log(`La IA eligió: ${juegaCompu}`);
  console.log(`El jugador eligió: ${juegaPlayer}`);
  if (
    juegaPlayer.toLowerCase() === "piedra" ||
    juegaPlayer.toLowerCase() === "papel" ||
    juegaPlayer.toLowerCase() === "tijera"
  ) {
    if (
      (juegaPlayer === "piedra" && juegaCompu === "papel") ||
      (juegaPlayer === "papel" && juegaCompu === "piedra") ||
      (juegaPlayer === "tijera" && juegaCompu === "papel")
    ) {
      console.log("¡Ganaste!");
    } else if (juegaPlayer === juegaCompu) {
      console.log("Hubo un empate");
    } else {
      console.log("Perdiste.");
    }
  } else {
    console.log("Debes colocar un dato correcto.");
  }
};

// juegaP("papel");
let player1Choice = prompt("Choice your option");
juegaP(player1Choice);
