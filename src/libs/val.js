// Función para validar si un valor es un número
export function esNumero(valor) {
  return typeof valor === "number" && !isNaN(valor);
}

// Función para validar si un valor es un correo electrónico
export function esCorreoElectronico(valor) {
  const expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegularCorreo.test(valor);
}

// Función para validar una contraseña con un límite de caracteres especiales
export function esContrasenaValida(contrasena) {
  // Establecer el límite de caracteres especiales
  const limiteCaracteresEspeciales = 2;

  // Contar el número de caracteres especiales en la contraseña
  const caracteresEspeciales = contrasena.replace(/[a-zA-Z0-9]/g, "").length;

  return caracteresEspeciales <= limiteCaracteresEspeciales;
}

// Función para validar si un valor contiene solo letras
export function soloLetras(valor) {
  const expresionRegularLetras = /^[a-zA-Z]+$/;
  console.log(expresionRegularLetras.test(valor));
  console.log("es " + valor);
  return expresionRegularLetras.test(valor);
}
export function soloLetrasDescripcion(valor) {
  const expresionRegularLetras = /^[a-zA-Z\s]+$/;
  return expresionRegularLetras.test(valor);
}
