// const botao = document.querySelector(".botao");

// function mostrar() {
//   const texto = document.querySelector(".texto");
//   texto.classList.toggle("ativar");
// }

// botao.addEventListener("click", mostrar);

// Função de mudar as propriedades top e left do .circulo com base no mousemove

function seguir() {
  const circulo = document.querySelector(".ciruclo");
  circulo.style.top = y + "px";
  circulo.style.left = x + "px";
}

window.addEventListener("mousemove", seguir);
