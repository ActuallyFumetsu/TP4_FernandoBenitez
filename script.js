// Referencias a los elementos del DOM
const welcomeMessage = document.getElementById("user-welcome");
const usernameInput = document.getElementById("username-input");
const submitButton = document.getElementById("submit-button");

// Evento para manejar el ingreso del nombre
submitButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        welcomeMessage.textContent = `¡Bienvenido, ${username}! Gracias por visitar nuestro proyecto.`;
        usernameInput.style.display = "none";
        submitButton.style.display = "none";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});

// Función para navegar a otra página
function navigateTo(page) {
    window.location.href = page;
}
