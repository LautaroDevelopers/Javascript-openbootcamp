// info: Inheritance - Herencia

class Persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  saludo() {
    console.log(`Hola, me llamo ${this._nombre}, tengo ${this._edad} años`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }

  saludo() {
    // Override
    super.saludo();
    console.log("y soy desarrollador de " + this.lenguaje);
  }
}

const newDev = new Desarrollador("Lautaro", 35, "JavaScript");
console.log(newDev);
newDev.saludo();

// info: Polimorfismo -> Varias formas de un mismo comportamiento
