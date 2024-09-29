const f = document.getElementById("form");

console.log(f);

f.addEventListener("submit", (evento) => {
  console.log("Form enviado", evento);
  evento.preventDefault();
});
