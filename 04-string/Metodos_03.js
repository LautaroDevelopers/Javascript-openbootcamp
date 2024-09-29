// https://regexr.com

let texto_largo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis quam";
console.log(texto_largo.match(/quis/g));

// note: ¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("consectetur"));

// note: Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("consectetur"));

// note: Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("quis quam"));
