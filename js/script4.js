const img = document.querySelectorAll("#galeria li img");
const principal = document.querySelector("#principal");

// Trocar a imagem que está dentro da div img
function galeriaTrocar(i) {
  principal.src = i.currentTarget.src;
  principal.alt = i.currentTarget.alt;
}

function galeriaClique(img) {
  img.addEventListener("click", galeriaTrocar);
}

img.forEach(galeriaClique);
