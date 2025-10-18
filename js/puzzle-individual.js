// Cambiar imagen principal al hacer click en la galería
function changeImage(img) {
  const mainImg = document.getElementById('main-img');
  mainImg.src = img.src;

  // Marcar la imagen seleccionada
  document.querySelectorAll('.puzzle-gallery img').forEach(i => i.classList.remove('active'));
  img.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const puzzleId = params.get('id');

  if (!puzzleId) return;

  // Cargar el JSON dinámicamente
  fetch('json/puzzles.json')
    .then(response => response.json())
    .then(puzzlesData => {
      const puzzle = puzzlesData[puzzleId];
      if (!puzzle) return;

      // Rellenar los datos del puzzle
      document.getElementById('puzzle-title').textContent = puzzle.title;
      document.getElementById('puzzle-category').textContent = "Categoría / Dificultad: " + puzzle.category;
      document.getElementById('puzzle-description').textContent = puzzle.description;
      document.getElementById('puzzle-price').textContent = "Precio: " + puzzle.price;
      document.getElementById('puzzle-amazon').href = puzzle.amazon;

      // Crear galería de imágenes
      const galeriaEl = document.getElementById('puzzle-galeria');
      if (galeriaEl) {
        galeriaEl.innerHTML = "";
        puzzle.images.forEach((src, index) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = puzzle.title;
          if(index === 0) {
            img.classList.add('active');
            document.getElementById('main-img').src = src;
          }
          img.addEventListener('click', () => changeImage(img));
          galeriaEl.appendChild(img);
        });
      }
    })
    .catch(error => console.error("Error cargando el JSON de puzzles:", error));
});
