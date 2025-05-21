document.addEventListener('DOMContentLoaded', function() {
    // Función para scroll suave para todos los enlaces con ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Si el enlace es "#" (inicio), scroll al top
            if (targetId === "#") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Funcionalidad para las tarjetas de especies
    document.querySelectorAll('.tarjeta-especie').forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            const especie = this.getAttribute('data-especie');
            
            // Activar la pestaña correspondiente
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-especie') === especie) {
                    btn.classList.add('active');
                }
            });
            
            // Mostrar el contenido correspondiente
            document.querySelectorAll('.proyecto-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(especie + '-content').classList.add('active');
            
            // Scroll a la sección de detalles
            document.querySelector('.proyecto-detalle').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Funcionalidad para las pestañas de especies
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const especie = this.getAttribute('data-especie');
            
            // Activar la pestaña actual
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            document.querySelectorAll('.proyecto-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(especie + '-content').classList.add('active');
        });
    });
});
