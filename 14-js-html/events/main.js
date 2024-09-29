const hTexto = document.getElementById("h-text");
console.log(hTexto);

hTexto.addEventListener("cambioTexto", (evento) => {
  console.log(evento.detail);
  hTexto.innerText = evento.detail.texto;
  hTexto.style.color = evento.detail.color;
});

function cambioTexto(nuevoTexto, color) {
  const evento = new CustomEvent("cambioTexto", {
    detail: {
      texto: nuevoTexto,
      color,
    },
  });
  hTexto.dispatchEvent(evento); // Lanzar un evento
}
