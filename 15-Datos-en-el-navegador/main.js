// info: LocalStorage

// localStorage.setItem("nombre", "Lautaro");
// localStorage.setItem("apellido", "Ledesma");

// console.log(localStorage.getItem("nombre"));

// localStorage.setItem(
//   "persona",
//   JSON.stringify({ nombre: "Lautaro", edad: 15 })
// );

// console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify() => Convierte un objeto/array a string
// JSON.parse() => Convierte un objeto/array convertido a traves de JSON.stringify() a objeto de JS

// localStorage.removeItem("nombre");

// info: SessionStorage

// sessionStorage.setItem("nombre", "Lautaro");
// sessionStorage.setItem("apellido", "Ledesma");

// sessionStorage.removeItem("nombre");

// info: Cookies

document.cookie = "nombre=Lautaro";

document.cookie =
  "nombreCaducidad= Nombre; expires=" + new Date(2024, 11, 24).toUTCString(); // note: Hacer que expire una cookie

console.log(document.cookie);
