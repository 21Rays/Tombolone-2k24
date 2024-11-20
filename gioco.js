let currentIndex = 0;
let score = 0;
const images = [
    { "src": "assets/gioco/1.jpg", "answer": "true" },
    { "src": "assets/gioco/2.jpg", "answer": "true" },
    { "src": "assets/gioco/3.jpg", "answer": "true" },
    { "src": "assets/gioco/4.jpg", "answer": "true" },
    { "src": "assets/gioco/5.jpg", "answer": "true" },
    { "src": "assets/gioco/6.jpg", "answer": "true" },
    { "src": "assets/gioco/7.jpg", "answer": "true" },
    { "src": "assets/gioco/8.jpg", "answer": "true" }
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