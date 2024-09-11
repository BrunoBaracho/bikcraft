const links = document.querySelectorAll("a");
const body = document.querySelector("body");

function ativarLink(i) {
  console.log(i.href);
  if (i.href == window.location.href) {
    i.classList.add("ativo");
    body.style.backgroundColor = "#000";
    console.log("feito");
  } else {
    console.log("erro");
  }
}

links.forEach(ativarLink);
