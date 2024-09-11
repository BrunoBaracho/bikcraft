//Ativar links do menu conforme a página atual
const links = document.querySelectorAll(".header-menu a");
const url = location.href;

function ativarLinks(i) {
  if (url.includes(i.href)) {
    i.classList.add("ativo");
  }
}

links.forEach(ativarLinks);

//Ativar items do orçamento conforme a página atual

const parametros = new URLSearchParams(location.search);

function ativarProduto(i) {
  const element = document.getElementById(i);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const faq = document.querySelectorAll(".perguntas button");

function trocarClasse(i) {
  const pergunta = i.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventoPergunta(i) {
  i.addEventListener("click", trocarClasse);
}

faq.forEach(eventoPergunta);

// Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicletas-imagens img");
const galeriaContainer = document.querySelector(".bicicletas-imagens");

function trocarImagem(i) {
  const img = i.currentTarget;
  if (matchMedia("(min-width: 950px)").matches) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
