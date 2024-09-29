class Persona {
  // info: Private -> #
  // note: Private -> Solo se puede acceder desde dentro de la clase
  #nombre;
  #edad;

  // info: Protected -> _
  // note: Protected -> Solo se puede acceder desde dentro de la clase y desde clases descendientes
  _isDeveloper = true;

  constructor(nombre, edad, isDeveloper) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  saludo() {
    console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años `);
  }

  getName() {
    // note: Getter -> Permite acceder (de forma controlada) a algun atributo/metodo protegido
    return this.#nombre;
  }

  #getEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#getEdad();
  }

  setEdad(edad) {
    this.#edad = edad;
  }
}

const persona = new Persona("Lautaro", 35, true);
// console.log(persona);
// console.log(persona.nombre);
persona.saludo();
console.log(persona.getName());
// console.log(persona.#getEdad());
console.log(persona._isDeveloper);

// info: Getter -> Metodos que permiten obtener atributos/metodos privados o protegidos

const edad = persona.getEdad();
console.log(edad);

// info: Setter -> Metodos que permiten modificar atributos/metodos privados o protegidos
// note: cambiar edad de persona
persona.setEdad(20);
console.log(persona.getEdad());
