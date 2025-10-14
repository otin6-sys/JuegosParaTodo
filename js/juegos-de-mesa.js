// Funciones de scroll horizontal para cada categoría
function scrollLeft(id) {
  const container = document.getElementById(id);
  container.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
}

function scrollRight(id) {
  const container = document.getElementById(id);
  container.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
}
