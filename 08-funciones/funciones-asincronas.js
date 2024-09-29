// info: Funciones asincronas

function myAsinc() {
  // note: Hace una llamada a una base de datos externa
  //note: Puede dar algún error
}

// info: Promesas

const myPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  // note: Si esta todo OK
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

myPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("Error"))
  .finally(() => console.log("Yo me ejecuto siempre"));
