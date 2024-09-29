// info: Conjuntos o sets

const array = [1, 2, 3, 6, 5, 4, 7, 8, 9, 10, "hola", 4, { name: "Lautaro" }];

const mySet = new Set(array);
console.log(array);
console.log(mySet);

// log: .add()

mySet.add(0);
console.log(mySet);
mySet.add(4);
console.log(mySet);

// log: .delete()

mySet.delete("hola");
console.log(mySet);

// log: .clear()

// mySet.clear();
// console.log(mySet);

// log: .has()

console.log(mySet.has(40));

// log: .size()

console.log(mySet.size);

// info: iterar elementos de un set

mySet.forEach((valor) => {
  console.log(valor);
});

const it_myset = mySet.values();
console.log(it_myset);

const ar_myset = [...mySet];
console.log(ar_myset);
