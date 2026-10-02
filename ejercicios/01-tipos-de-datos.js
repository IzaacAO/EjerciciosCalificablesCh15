

function esPrecioValido(valor) {
  if (typeof valor === "number" && !Number.isNaN(valor) && valor > 0) {
    return true;
  } else {
    return false;
  }
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { esPrecioValido };
