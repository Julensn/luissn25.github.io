// script.js
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imagen-galeria');
    const lightbox = document.getElementById('lightbox');
    const imagenLightbox = document.getElementById('imagen-lightbox');
    const cerrarLightbox = document.getElementById('cerrar-lightbox');

    // Abre el lightbox al hacer clic en una imagen
    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            imagenLightbox.src = imagen.src; // Asigna la imagen al lightbox
            lightbox.style.display = 'flex'; // Muestra el lightbox
        });
    });

    // Cierra el lightbox al hacer clic en el botón de cierre
    cerrarLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Cierra el lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target !== imagenLightbox) {
            lightbox.style.display = 'none';
        }
    });
});
