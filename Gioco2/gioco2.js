document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    const maxSnowflakes = 100; // Numero massimo di fiocchi di neve
    const snowflakes = []; // Array per memorizzare i fiocchi di neve

    // Funzione per creare un fiocco di neve
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄'; // Puoi sostituirlo con immagini o altri simboli

        // Imposta posizione e durata iniziale
        snowflake.style.left = Math.random() * 100 + 'vw'; // Posizione orizzontale casuale
        snowflake.style.top = Math.random() * 100 + 'vh'; // Posizione verticale casuale
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Durata dell'animazione casuale
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Dimensione casuale del fiocco
        snowflakesContainer.appendChild(snowflake);

        snowflakes.push(snowflake); // Aggiungi all'array
        return snowflake;
    }

    // Funzione per aggiornare un fiocco di neve
    function updateSnowflake(snowflake) {
        // Riposiziona il fiocco di neve in alto con nuove proprietà casuali
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 4 + 3 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.top = '-10px'; // Ripristina la posizione
    }

    // Creazione iniziale dei fiocchi di neve
    for (let i = 0; i < maxSnowflakes; i++) {
        createSnowflake();
    }

    // Loop per riutilizzare i fiocchi di neve
    setInterval(() => {
        snowflakes.forEach(snowflake => {
            const rect = snowflake.getBoundingClientRect();
            // Se il fiocco è fuori dallo schermo, lo riutilizziamo
            if (rect.top > window.innerHeight) {
                updateSnowflake(snowflake);
            }
        });
    }, 50); // Controlla ogni 50ms
});



function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthText = document.getElementById('strength');

    let strength = 0;

    // Criteria for strength evaluation
    if (password.length >= 8) strength += 1; // Length
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter
    if (/[0-9]/.test(password)) strength += 1; // Number
    if (/[@$!%*?&]/.test(password)) strength += 1; // Special character

    // Strength feedback
    switch (strength) {
        case 0:
        case 1:
            strengthText.textContent = "Molto Debole";
            strengthText.style.color = "red";
            strengthText.style.fontWeight = "bolder";
            strengthText.style.fontSize = "25px";
            strengthText.style.background = "#17171717";
            strengthText.style.padding = "10px";
            break;

        case 2:
            strengthText.textContent = "Debole";
            strengthText.style.color = "orange";
            strengthText.style.fontWeight = "bolder";
            strengthText.style.fontSize = "25px";
            strengthText.style.background = "#17171717";
            strengthText.style.padding = "10px";
            break;
            break;
        case 3:
            strengthText.textContent = "Moderata";
            strengthText.style.color = "#a39e00";
            strengthText.style.fontWeight = "bolder";
            strengthText.style.fontSize = "25px";
            strengthText.style.background = "#17171717";
            strengthText.style.padding = "10px";
            break;
            break;
        case 4:
            strengthText.textContent = "Buona";
            strengthText.style.color = "#006880";
            strengthText.style.fontWeight = "bolder";
            strengthText.style.fontSize = "25px";
            strengthText.style.background = "#17171717";
            strengthText.style.padding = "10px";
            break;
            break;
        case 5:
            strengthText.textContent = "Molto Buona";
            strengthText.style.color = "#004d09";
            strengthText.style.fontWeight = "bolder";
            strengthText.style.fontSize = "25px";
            strengthText.style.background = "#17171717";
            strengthText.style.padding = "10px";
            break;
            break;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the button text
        this.textContent = type === 'password' ? 'Mostra' : 'Nascondi';
    });
});
