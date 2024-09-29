const persona = {
  nombre: "Lautaro",
  edad: 35,
};

console.log(persona);

function getDobleEdad(edad) {
  return edad * 2;
}

const DobleEdad = getDobleEdad(persona.edad);
console.log(DobleEdad);

function getArray(edad) {
  let arrayNums = [];
  for (let i = 0; i < 10; i++) {
    const numero = edad + i;
    console.log(numero);
    //   arrayNums.push(numero);
    arrayNums = [...arrayNums, numero];
  }
  return arrayNums;
}
const arrayNums = getArray(persona.edad);

console.log(arrayNums);
