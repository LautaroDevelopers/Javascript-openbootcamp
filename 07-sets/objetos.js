const listaObjetos = {
  id: 1,
  nombre: "Lautaro",
  apellido: "Ledesma",
  edad: 35,
  isDeveloper: true,
  libros_favoritos: ["El negocio del siglo XXI - Robert Kiyosaki", "Lupan"],
  "4-juegos": ["Mario", "Zelda", "Poke", "Metroid"],
};

console.log(listaObjetos.id);
console.log(listaObjetos["4-juegos"]);

const prop = "isDeveloper";
console.log(listaObjetos[prop]);

const listaObjetos2 = listaObjetos;
console.log(listaObjetos2);

listaObjetos2.nombre = "Leire";
console.log(listaObjetos2.nombre);
console.log(listaObjetos.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

// info: Clonar objetos

const listaObjetos3 = { ...listaObjetos };
console.log(listaObjetos3.nombre);

listaObjetos3.nombre = "Gorka";
console.log(listaObjetos3.nombre);

// info: Ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
  { titulo: "Spiderman", año: 2002 },
  { titulo: "Los vengadores", año: 2012 },
  { titulo: "El señor de los anillos", año: 2001 },
  { titulo: "Los simpsons", año: 1989 },
  { titulo: "Titanic", año: 1997 },
  { titulo: "Moana", año: 2016 },
  { titulo: "Iron Man", año: 2008 },
  { titulo: "TED", año: 2012 },
];

listaPeliculas.sort((a, b) => a.año - b.año);

console.log(listaPeliculas);
