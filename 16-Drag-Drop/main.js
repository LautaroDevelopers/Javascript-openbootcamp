const parrafos = document.querySelectorAll("p");
const setion = document.querySelectorAll(".section");
const img = document.querySelector(".image-fantasma");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    // event.target.classList.add("dragging");
    console.log(`Estoy arrastrando el parrafo: "${parrafo.innerText}"`);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    event.dataTransfer.setDragImage(img, 0, 0);
  });
  parrafo.addEventListener("dragend", (event) => {
    // console.log(`Termino de arrastre el parrafo: "${parrafo.innerText}"`);
    parrafo.classList.remove("dragging");
  });
});

setion.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"; // note:  dropEffect = "move" | "copy" | "link" | "none". cambia el icono al arrastrar
    // console.log("Estoy arrastrando");
  });
  section.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    section.appendChild(parrafo);
  });
});
