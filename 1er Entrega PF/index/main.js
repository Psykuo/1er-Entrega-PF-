// Pedir al usuario la cantidad de productos a comprar
function getCantidad() {
  let cantidad = prompt("Ingrese la cantidad de productos que quiere comprar:");

  // Validar que el usuario ingrese un número válido
  while (Number(cantidad) !== Number(cantidad) || Number(cantidad) <= 0) {
    cantidad = prompt("Ingrese un número válido:");
  }

  return cantidad;
}

// Pedir al usuario el precio unitario del producto
function getPrecioUnitario() {
  let precioUnitario = prompt("Ingrese el precio del producto:");

  // Validar que el usuario ingrese un número válido
  while (Number(precioUnitario) !== Number(precioUnitario) || Number(precioUnitario) <= 0) {
    precioUnitario = prompt("Ingrese un número válido:");
  }

  return precioUnitario;
}

let cantidad = getCantidad();
let precioUnitario = getPrecioUnitario();

// Calcular el precio total sin descuento
let precioTotalSinDescuento = cantidad * precioUnitario;

// Mostrar el precio total sin descuento al usuario
alert(`El precio total es de $${precioTotalSinDescuento}.`);

// Pedir al usuario que ingrese un código de descuento (opcional)
let codigoDescuento = prompt("¿Tiene un código de descuento? Ingrese el código, o presione Cancelar si no cuenta con uno:");

// Calcular el precio total con descuento
let descuento = 0;
let precioTotalConDescuento = precioTotalSinDescuento;

if (codigoDescuento === "DESCUENTO10") {
  descuento = precioTotalSinDescuento * 0.1;
} else if (codigoDescuento === "DESCUENTO20") {
  descuento = precioTotalSinDescuento * 0.2;
} else if (codigoDescuento === "DESCUENTOAMIGO") {
  descuento = precioTotalSinDescuento * 0.6;
}
if (descuento > 0) {
  precioTotalConDescuento = precioTotalSinDescuento - descuento; // Ya que el descuento original es = 0 
}

// Mostrar el precio total (con o sin descuento) al usuario...
alert(`El precio total ${descuento > 0 ? "con descuento" : "sin descuento"} es de $${precioTotalConDescuento}.`);
