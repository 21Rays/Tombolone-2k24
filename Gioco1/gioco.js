let currentIndex = 0;
let score = 0;
const slides = document.querySelectorAll('.slide');
const images = [
    { "src": "/assets/gioco/1.jpg", "answer": "true" },
    { "src": "/assets/gioco/2.jpg", "answer": "true" },
    { "src": "/assets/gioco/3.jpg", "answer": "true" },
    { "src": "/assets/gioco/4.jpg", "answer": "true" },
    { "src": "/assets/gioco/5.jpg", "answer": "true" },
    { "src": "/assets/gioco/6.jpg", "answer": "true" },
    { "src": "/assets/gioco/7.jpg", "answer": "true" },
    { "src": "/assets/gioco/8.jpg", "answer": "true" }
];

function updateImage() {
    const imageElement = document.getElementById("image");
    imageElement.src = images[currentIndex].src;
}

function checkAnswer(isTrue) {
    const correctAnswer = images[currentIndex].answer === "true";
    
    if (isTrue === correctAnswer) {
        score++;
        document.getElementById("score").innerText = score;
    }
    else{
        console.log("Hai sbagliato coglione");
    }

    if(currentIndex === 8){
    }else{
        nextIndex();
    }
}

function nextIndex() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}





// Seleziona gli elementi
const gameImage = document.getElementById("image");
const zoomOverlay = document.getElementById("zoomOverlay");
const zoomedImage = document.getElementById("zoomedImage");

// Aggiungi evento per aprire lo zoom
gameImage.addEventListener("click", () => {
    zoomedImage.src = gameImage.src; // Copia il src dell'immagine cliccata
    zoomOverlay.style.display = "flex"; // Mostra l'overlay
});

// Aggiungi evento per chiudere lo zoom
zoomOverlay.addEventListener("click", () => {
    zoomOverlay.style.display = "none"; // Nascondi l'overlay
});

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
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflakesContainer.appendChild(snowflake);

        snowflakes.push(snowflake); // Aggiungi all'array
        return snowflake;
    }

    // Funzione per aggiornare un fiocco di neve
    function updateSnowflake(snowflake) {
        // Riposiziona il fiocco di neve in alto con nuove proprietà casuali
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
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

