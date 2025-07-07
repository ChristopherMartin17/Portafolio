document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase active de todos los botones
      filterBtns.forEach(btn => btn.classList.remove('active'));
      // Añadir clase active al botón clickeado
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projectItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
    });
  });
});