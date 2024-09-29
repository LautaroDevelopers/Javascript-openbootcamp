// info: Obtener longitud
let str = "Hola soy un string";
console.log(str.length);

// info: Obtener partes de un Caracter
// log: slice(), substring(), substr()
let slice_str = str.slice(5, 10); //note: (valor que inicia, Valor que termina)
console.log(slice_str);

// warning: No se recomienda usar. Sustituir por slice()
let substring_str = str.substring(5, 10); //note: (valor que inicia, Valor que termina)
console.log(substring_str);

// warning: No se debe usar. Sustituir por slice()
let substr_str = str.substr(5, 10); //note: (valor que inicia, Cantidad de caracteres)
console.log(substr_str);

// info: Remplazar caracteres
let cadena = "Hola mi nombre es Lautaro";
console.log(cadena);

// note: Al utlizar strings solo remplaza la primera instancia
console.log(cadena.replace("Lautaro", "Gabriel")); //note: (Valor que se va a reemplazar, Valor nuevo)

let texto_largo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis quam";

console.log(texto_largo.replace("quis quam", "quis"));

// note: Al utlizar la expresion regular /g(global), remplaza todas las instancias
console.log(texto_largo.replace(/quis/g, "quis"));
