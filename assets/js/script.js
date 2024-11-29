document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada con éxito.");
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dynamicForm');

    // Recorre todos los inputs dentro del formulario
    const inputs = form.querySelectorAll('input[type="text"]') 
                || form.querySelectorAll('textarea') 
                || form.querySelectorAll('input[type="email"]') 
                || form.querySelectorAll('input[type="password"]')
                || form.querySelectorAll('input[type="number"]')
                || form.querySelectorAll('input[type="tel"]')
                || form.querySelectorAll('input[type="url"]')
                || form.querySelectorAll('input[type="date"]')
                || form.querySelectorAll('input[type="time"]')
                || form.querySelectorAll('input[type="datetime-local"]')
                || form.querySelectorAll('input[type="search"]');
    inputs.forEach(input => {
        // Crear un botón Clear dinámicamente
        const clearButton = document.createElement('span');
        clearButton.innerHTML = 'x';
        clearButton.className = 'clear-button';

        // Insertar el botón después del input
        input.insertAdjacentElement('afterend', clearButton);

        // Mostrar/Ocultar el botón según el contenido del input
        input.addEventListener('input', () => {
            if (input.value.length > 0) {
                clearButton.style.display = 'inline-block';
            } else {
                clearButton.style.display = 'none';
            }
        });

        // Limpiar el contenido del input al hacer clic en Clear
        clearButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar que el botón recargue la página
            input.value = '';
            clearButton.style.display = 'none'; // Ocultar el botón Clear
        });
    });
});