const juegosContainer = document.querySelector('.juegos-container');
const ofertasContainer = document.querySelector('.ofertas-container');

function scrollLeft() {
  juegosContainer.scrollBy({ left: -220, behavior: 'smooth' });
}

function scrollRight() {
  juegosContainer.scrollBy({ left: 220, behavior: 'smooth' });
}

/* Si quieres que las ofertas también tengan botones, puedes agregar botones y usar: */
function ofertasScrollLeft() {
  ofertasContainer.scrollBy({ left: -220, behavior: 'smooth' });
}

function ofertasScrollRight() {
  ofertasContainer.scrollBy({ left: 220, behavior: 'smooth' });
}


