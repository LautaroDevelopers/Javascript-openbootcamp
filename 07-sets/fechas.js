const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(2024, 8, 16);
console.log(fecha2);

const fecha3 = new Date(1000000); // note: milisegundos
console.log(fecha3);

const fecha4 = new Date("september 16, 2024 12:00"); // note: cadena
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(2024, 8, 16);
console.log(fecha2 === fecha5); // error: no se puede comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); // note: correcto

// info: Obtener dia, mes, año de una fecha
console.log(fecha2.getDate());
console.log(fecha2.getMonth() + 1);
console.log(fecha2.getFullYear());

// info: Mostrar la fecha en un string
console.log(fecha2);

// note: .toLocaleDateString() - .toLocaleTimeString()
console.log(fecha2.toLocaleDateString("es-ES"));
console.log(fecha2.toLocaleTimeString("es-ES"));
