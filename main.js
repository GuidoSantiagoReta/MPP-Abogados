

// Closes responsive menu when a scroll trigger link is clicked

$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// Función para remover la clase activa en los enlaces 
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Añadir la clase 'active' al enlace clickeado
            this.classList.add('active');
        });
    });
});

window.onload = function() {
    document.querySelector('a[data-toggle="collapse"][href="#inicio"]').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  };