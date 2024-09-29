const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // alert("Boton presionado");
  confirm("Estas seguro?") ? console.log("Aceptado") : console.log("Cancelado");
});

const info = document.querySelector("#info");
info.addEventListener("click", () => {
  const nombre = (nombre) => window.prompt("Ingresa tu nombre");
  const prompt = nombre();

  if (prompt) {
    console.log("Tu nombre es:", prompt);
  } else {
    alert("Debes ingresar un nombre");
    console.error("Debes ingresar un nombre");
    nombre();
  }
  console.log("Tu nombre es:", prompt);
});

const list = [
  { nombre: "Lautaro", edad: 15 },
  { nombre: "Leire", edad: 16 },
  { nombre: "Gorka", edad: 17 },
  { nombre: "Lucia", edad: 18 },
  { nombre: "Amaia", edad: 19 },
  { nombre: "Inmaculada", edad: 20 },
];

console.table(list);
