// js/puzzles.js - scroll lateral con flechas más lentas
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.scroll-container');

  carousels.forEach(container => {
    const leftBtn = container.querySelector('.scroll-btn.left');
    const rightBtn = container.querySelector('.scroll-btn.right');
    const scrollEl = container.querySelector('.juego-scroll');

    if (!scrollEl) return;

    const step = () => 100; // distancia para scroll más lento

    const updateButtons = () => {
      if (leftBtn) leftBtn.disabled = scrollEl.scrollLeft <= 5;
      if (rightBtn) rightBtn.disabled = (scrollEl.scrollLeft + scrollEl.clientWidth) >= (scrollEl.scrollWidth - 5);
    };

    if (leftBtn) {
      leftBtn.addEventListener('click', () => {
        scrollEl.scrollBy({ left: -step(), behavior: 'smooth' });
        setTimeout(updateButtons, 300);
      });
    }

    if (rightBtn) {
      rightBtn.addEventListener('click', () => {
        scrollEl.scrollBy({ left: step(), behavior: 'smooth' });
        setTimeout(updateButtons, 300);
      });
    }

    let isDown = false, startX, scrollLeftStart;
    scrollEl.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollEl.classList.add('dragging');
      startX = e.pageX - scrollEl.offsetLeft;
      scrollLeftStart = scrollEl.scrollLeft;
    });
    scrollEl.addEventListener('mouseleave', () => { isDown = false; scrollEl.classList.remove('dragging'); });
    scrollEl.addEventListener('mouseup', () => { isDown = false; scrollEl.classList.remove('dragging'); updateButtons(); });
    scrollEl.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollEl.offsetLeft;
      const walk = (x - startX) * 1;
      scrollEl.scrollLeft = scrollLeftStart - walk;
    });

    scrollEl.addEventListener('scroll', () => {
      if (scrollEl._updating) return;
      scrollEl._updating = true;
      setTimeout(() => { updateButtons(); scrollEl._updating = false; }, 50);
    });

    updateButtons();
    window.addEventListener('resize', updateButtons);
  });
});
