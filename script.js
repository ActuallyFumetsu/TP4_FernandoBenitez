if (window.location.pathname.includes('index.html')) {
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
}

if (window.location.pathname.includes('pagina1.html')) {
// Validación de edad
const ageInput = document.getElementById("age-input");
const ageSubmit = document.getElementById("age-submit");
const ageMessage = document.getElementById("age-message");

ageSubmit.addEventListener("click", () => {
    const age = parseInt(ageInput.value, 10);

    if (!isNaN(age)) {
        if (age > 20) {
            ageMessage.textContent = "Eres mayor de 20 años.";
            ageMessage.style.color = "green";
        } else {
            ageMessage.textContent = "No eres mayor de 20 años.";
            ageMessage.style.color = "red";
        }
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
});

// Cambiar imágenes al pasar el ratón
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
    const originalSrc = item.src;
    const altSrc = item.getAttribute("data-alt-src");

    item.addEventListener("mouseover", () => {
        item.src = altSrc;
    });

    item.addEventListener("mouseout", () => {
        item.src = originalSrc;
    });
});
}

if (window.location.pathname.includes('pagina2.html')) {
// Multiplicación
function performMultiplication() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de la multiplicación es: ${num1 * num2}`);
    } else {
        alert("Por favor, ingresa valores numéricos válidos.");
    }
}

// Exponente 2
function calculateSquare() {
    const num = parseFloat(prompt("Ingresa un número para elevar al cuadrado:"));

    if (!isNaN(num)) {
        alert(`El resultado es: ${num ** 2}`);
    } else {
        alert("Por favor, ingresa un valor numérico válido.");
    }
}

// Resta
function performSubtraction() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de la resta es: ${num1 - num2}`);
    } else {
        alert("Por favor, ingresa valores numéricos válidos.");
    }
}
}
