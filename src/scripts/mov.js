// Detección de dispositivo y ajustes dinámicos
function adjustLayoutForMobile() {
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
    
    if (isMobile) {
        // Inicializar todos los carruseles
        $('.carousel').carousel();
        
        // Mostrar todos los servicios en móvil
        document.querySelectorAll('.service-card.hidden').forEach(card => {
            card.classList.remove('hidden');
        });
        
        // Ocultar botón "Ver más servicios"
        document.getElementById('toggleServices').style.display = 'none';
    }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('DOMContentLoaded', adjustLayoutForMobile);
window.addEventListener('resize', adjustLayoutForMobile);