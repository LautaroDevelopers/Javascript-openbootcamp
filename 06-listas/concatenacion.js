// info: Unir dos listas .concat(lista2)
const lista = [1, "Hola", true, undefined, null];
const lista2 = [2, "Adios", true, undefined, null];

console.log(lista.concat(lista2));

const lista3 = lista.concat(lista2);
console.log(lista3);

// info: Unir dos listas con el factor de propagacion
console.log(...lista3);

const lista4 = [...lista, ...lista2];
console.log(lista4);

// error: Mal entendido el concepto del factor de propagacion
const lista5 = [lista, lista2];
console.log(lista5);


