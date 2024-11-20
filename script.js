let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

//memorizza i due bottoni
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

//cazzare i bottoni
function toggleButton(){
    if(currentSlide === 0){
        prevButton.style.display = 'none'; //nascondi tasto indietro
    } else {
        prevButton.style.display = 'flex'; //mostra il tasto indietro
    }

    if(currentSlide === 5){
        nextButton.style.display = 'none'; //nascondi tasto avanti
    } else {
        nextButton.style.display = 'flex'; //mostra tasto avanti
    }
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    toggleButton();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    toggleButton();
}

//settare i bottoni
toggleButton();

// Mostra la prima slide all'inizio
showSlide(currentSlide);

// Seleziona l'elemento da animare
const movingImage = document.querySelector('.moving-image');



// Impostazioni per il movimento
let x = 0; // Posizione orizzontale
let y = 0; // Posizione verticale
let dx = 5; // Direzione orizzontale
let dy = 5; // Direzione verticale
const speed = 20; // Velocità in millisecondi

function moveImage() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const imgWidth = movingImage.offsetWidth;
    const imgHeight = movingImage.offsetHeight;

    // Aggiorna posizione
    x += dx;
    y += dy;

    // Cambia direzione ai bordi
    if (x + imgWidth >= width || x <= 0) dx *= -1;
    if (y + imgHeight >= height || y <= 0) dy *= -1;

    // Applica la posizione
    movingImage.style.left = `${x}px`;
    movingImage.style.top = `${y}px`;



    // Ripete il movimento
    setTimeout(moveImage, speed);
}

// Inizia il movimento
moveImage();

//scorrimento con freccie e s e a
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight'&&currentSlide!=5) nextSlide();
    if (e.key === 'd'&&currentSlide!=5) nextSlide();
    if (e.key === 'ArrowLeft'&&currentSlide!=0) prevSlide();
    if (e.key === 'a'&&currentSlide!=0) prevSlide();
});

