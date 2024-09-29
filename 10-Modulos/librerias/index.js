// info: Instalar Axios para hacer llamadas a servicios externos

import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/charmander")
  .then(function (response) {
    // handle success
    console.debug("Success");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.error("Error");
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
