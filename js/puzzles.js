function scrollRight(id) {
  const container = document.getElementById(id);
  container.scrollBy({ left: 200, behavior: 'smooth' });
}

function scrollLeft(id) {
  const container = document.getElementById(id);
  container.scrollBy({ left: -200, behavior: 'smooth' });
}