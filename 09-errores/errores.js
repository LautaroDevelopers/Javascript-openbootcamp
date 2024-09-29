const myFuncion = (val) => {
  if (typeof val == "number") {
    return val * 2;
  }
  // return false;
  throw new Error("El valor debe ser un numero");
};

const numero = "2";

try {
  console.log("Esta ejecutando de manera correcta");
  const elDoble = myFuncion(numero);
  console.log(elDoble);
} catch (e) {
  console.log("Error");
  console.error(e);
} finally {
  console.log("Se ejecuta siempre");
}

// info: Errores mas comunes

// InternalError, SyntaxError, TypeError, RangeError, ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
