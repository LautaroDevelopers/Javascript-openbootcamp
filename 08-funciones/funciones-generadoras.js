function* generarId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; // note: espera hasta que se llame la proxima vez
  }
}

const gen = generarId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
