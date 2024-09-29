// info: Convertir Mayúsculas
let input = "Geminis";
let db = "geminis";

// log: toUpperCase() - toLowerCase()
console.log(input.toUpperCase());
console.log(db.toLowerCase());

// log: toLocaleUpperCase() - toLocaleLowerCase()
console.log(input.toLocaleUpperCase());
console.log(input.toLocaleLowerCase());

// note: Comparar Mayúsculas y Minúsculas
console.log(input.toLowerCase() === db.toLowerCase());

// info: Concatenar Strings
let str_1 = "Hola soy la primera cadena";
let str_2 = "Hola soy la segunda cadena";

console.log(str_1.concat(" - ", str_2));
console.log(str_1 + " - " + str_2);
console.log(`${str_1} - ${str_2}`);

// Eliminar Espacios al inicio y al final
let str_3 = "   Hola soy la primera cadena    ";
console.log(str_3.length);

// note: trim(), trimStart(), trimEnd(). Elimina los espacios al inicio y al final
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// info: Obtener posicion de un Caracter
let str_4 = "Hola soy la primera cadena"; // ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y'....]
console.log(str_4.charAt(5)); //note: (posicion)
console.log(str_4[6]);

// info: Obtener posicion de una Palabra
let str_5 = "Hola soy Lautaro y me gusta JS"; // ['H', 'o', 'l', 'a', ' ', 's', 'o', 'y'....]
console.log(str_5.indexOf("Lautaro")); //note: (palabra). Pasa la primera que encuentre
console.log(str_5.charAt("9"));
console.log(str_5.lastIndexOf("Lautaro")); //note: (palabra). Pasa la ultima que encuentre
