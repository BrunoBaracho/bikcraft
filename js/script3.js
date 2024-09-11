const link = document.querySelectorAll("nav a");

function logHref(item) {
  console.log(item.href);
}

link.forEach(logHref);
