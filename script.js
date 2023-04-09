// Seleccione los elementos de botón de categoría y work-item
const categoryBtns = document.querySelectorAll('.category-btn');
const workItems = document.querySelectorAll('.work-item');

// Agregue un controlador de eventos click a cada botón de categoría
categoryBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const category = btn.dataset.category;
    
    // Ocultar todos los work-items que no pertenecen a la categoría seleccionada
    workItems.forEach(function(item) {
      if (item.dataset.category === category || category === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
