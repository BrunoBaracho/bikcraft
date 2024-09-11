const lista = ["JS", 20, true];

const body = document.querySelector("body");

for (i = 0; i < lista.length; i++) {
  console.log(lista[i]);
  body.innerHTML += lista[i] + "<br>";
}

lista.forEach(adddBody);

function adddBody(item) {
  body.innerHTML += item + "<br>";
}
