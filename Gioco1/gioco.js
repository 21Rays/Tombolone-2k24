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
