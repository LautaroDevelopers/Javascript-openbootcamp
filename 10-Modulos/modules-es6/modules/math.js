export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  return a / b;
}

export function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

export function elevar(a, b) {
  return a ** b;
}

export const nombre = "Matematicas";
