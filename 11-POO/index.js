const persona = {
  nombre: "Lautaro",
  apellido: "Ledesma",
  isDevelopers: true,
  edad: 15,
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  },
};

persona.saludar();
console.log(persona);

const otra_persona = {
  nombre: "Lautaro",
  apellido: "Ledesma",
  isDevelopers: true,
  edad: 15,
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  },
};

otra_persona.saludar();

// Funcion Factory
const crearPersona = (nombre, apellido, isDevelopers, edad) => {
  return {
    nombre,
    apellido,
    isDevelopers,
    edad,
    saludar: function () {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    },
  };
};

const nueva_persona = crearPersona("Lautaro", "Ledesma", true, 15);
nueva_persona.saludar();

const nueva_persona2 = crearPersona("Leire", "Ledesma", true, 34);
nueva_persona2.saludar();
