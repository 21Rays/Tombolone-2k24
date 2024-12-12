document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    const maxSnowflakes = 100;
    const snowflakes = [];

    // Funzione per creare un fiocco di neve
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';

        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = Math.random() * 100 + 'vh';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflakesContainer.appendChild(snowflake);

        snowflakes.push(snowflake);
        return snowflake;
    }

    // Funzione per aggiornare un fiocco di neve
    function updateSnowflake(snowflake) {
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 4 + 3 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.top = '-10px';
    }

    for (let i = 0; i < maxSnowflakes; i++) {
        createSnowflake();
    }

    setInterval(() => {
        snowflakes.forEach(snowflake => {
            const rect = snowflake.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                updateSnowflake(snowflake);
            }
        });
    }, 50);

    let currentIndex = 0;
    let score = 0;
    const images = [
        { "src": "assets/1.png", "answer": "false" },
        { "src": "assets/3.png", "answer": "true" },
        { "src": "assets/2.png", "answer": "false" },
        { "src": "assets/4.png", "answer": "true" },
        { "src": "assets/5.png", "answer": "true" },
        { "src": "assets/6.png", "answer": "false" }
    ];

    function updateImage() {
        const imageElement = document.getElementById("image");
        imageElement.src = images[currentIndex].src;
    }

    function checkAnswer(isTrue) {
        const correctAnswer = images[currentIndex].answer === "true";

        if (isTrue === correctAnswer) {
            if (score < 6) {
                score++;
            }
        } else {
            console.log("Hai sbagliato!");
        }

        if (currentIndex === images.length - 1) {
            alert("Hai finito! Ottimo :D, Il tuo punteggio è: " + score + "/6");
        } else {
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

    gameImage.addEventListener("click", () => {
        zoomedImage.src = gameImage.src;
        zoomOverlay.style.display = "flex";
    });

    zoomOverlay.addEventListener("click", () => {
        zoomOverlay.style.display = "none";
    });

    // Pulsanti True/False
    document.getElementById("trueButton").addEventListener("click", function() {
        checkAnswer(true);
    });

    document.getElementById("falseButton").addEventListener("click", function() {
        checkAnswer(false);
    });

    // Assicurati che la prima immagine venga aggiornata all'inizio
    updateImage(); 
});
