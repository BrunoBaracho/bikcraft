// selecionar o botão com id button e adicionar um evento de click que chama a função somar

const botao = document.querySelector("#button");
if (botao) {
  botao.addEventListener("click", somar);
}
const div = document.querySelector("#div");

function somar() {
  if (div.innerHTML === "10") {
    alert("Chegou a 10");
    div.innerHTML = 0;
  } else {
    div.innerHTML = parseInt(div.innerHTML) + 1;
  }
}
