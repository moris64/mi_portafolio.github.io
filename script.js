// Seleccione los elementos de bot�n de categor�a y work-item
const categoryBtns = document.querySelectorAll('.category-btn');
const workItems = document.querySelectorAll('.work-item');

// Agregue un controlador de eventos click a cada bot�n de categor�a
categoryBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const category = btn.dataset.category;
    
    // Ocultar todos los work-items que no pertenecen a la categor�a seleccionada
    workItems.forEach(function(item) {
      if (item.dataset.category === category || category === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
