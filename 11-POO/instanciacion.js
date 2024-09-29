class Persona {
  nombre;
  edad;
  isDeveloper;
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(
      `Hola, me llamo ${this.nombre}, tengo ${this.edad} años ` +
        `y ${this.isDeveloper ? "soy un developer" : "no soy un developer"}`
    );
  }
}

const nueva_persona = new Persona("Lautaro", 15, false);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // note: Inicializado
console.log(typeof numero);
let persona_2 = new Persona("Lautaro", 15, false); // note: Instanciar

// note: Instanceof -> similar a typeof pero para clases

console.log(persona_2 instanceof Persona);
