

// Cierra el menú responsivo cuando se hace clic en un enlace de activación de desplazamiento
$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


// Función para remover la clase activa en los enlaces 
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            // Añadir la clase 'active' al enlace clickeado
            this.classList.add('active');
        });
    });
});

// función para volver al inicio
window.onload = function () {
    document.querySelector('a[data-toggle="collapse"][href="#inicio"]').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};