const formulario = document.querySelector("form");

function formularioEnviado(i) {
  if (i.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radios: 4px; background:#f7f7f7;'>Mensagem enviada com sucesso! Em breve entraremos em contato.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radios: 4px; background:#f7f7f7;'>Erro no envio, você pode enviar diretamente paranosso e-mail em ...</p >";
  }
}

function enviarFormulario(i) {
  i.preventDefault();
  const botao = formulario.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
