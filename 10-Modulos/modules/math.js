function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

module.exports = {
  suma,
  resta,
  multiplicar,
  dividir,
  factorial,
};
