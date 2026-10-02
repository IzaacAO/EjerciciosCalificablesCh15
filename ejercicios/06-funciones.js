

// Estas dos líneas traen tus funciones de los ejercicios 02 y 03
const { calcularPrecioConIva } = require("./02-variables-y-operadores");
const { calcularDescuento } = require("./03-condicionales");


function calcularTotalFactura(subtotal) {
  const descuento = calcularDescuento(subtotal);
  const subtotalConDescuento = subtotal - descuento;
  const totalConIva = calcularPrecioConIva(subtotalConDescuento);
  return totalConIva;
}


module.exports = { calcularTotalFactura };
