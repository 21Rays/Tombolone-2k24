let currentIndex = 8;
let score = 0;
const images = [
    { "src": "assets/gioco/9.jpg", "answer": "true" },
    { "src": "assets/gioco/10.jpg", "answer": "true" },
    { "src": "assets/gioco/11.jpg", "answer": "true" },
    { "src": "assets/gioco/12.jpg", "answer": "true" },
    { "src": "assets/gioco/13.jpg", "answer": "true" },
    { "src": "assets/gioco/14.jpg", "answer": "true" },
    { "src": "assets/gioco/15.jpg", "answer": "true" },
    { "src": "assets/gioco/16.jpg", "answer": "true" }
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

    nextSlide();
}

function nextSlide() {
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