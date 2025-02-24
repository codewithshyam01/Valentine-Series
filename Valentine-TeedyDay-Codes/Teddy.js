
const notes = [
    "Hey Madam, teri smile ne toh mera dil chura liya! 🐻✨",
    "tu meri zindagi ka pop-up ad hai, close karne ka mann nahi karta! 😅❤️",
    "Kitna cute hai tu yaar, irritate karne ka bhi plan cancel karna padta hai! 😘✨",
    "You're sweeter than cotton candy, my pookie bear! 🍭",
    "tu meri heartbeat ka rhythm hai, tere bina toh beat hi miss ho jati hai. 💓✨🌈"
];

// Replace these URLs with your actual GIF URLs
const gifs = [
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif",
    "gif5.gif"
];

let currentIndex = 0;

// Create falling teddies 
function createTeddyRain() {
    const teddy = document.createElement('div');
    teddy.innerHTML = '🧸';
    teddy.className = 'teddy-rain text-2xl';
    teddy.style.left = Math.random() * 100 + 'vw';
    teddy.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(teddy);
    
    setTimeout(() => teddy.remove(), 5000);
}

// Initialize content and progress dots
function initialize() {
    updateContent();
    createProgressDots();
    createDecorations();
    setInterval(createTeddyRain, 500);
}

// Update both note and GIF
function updateContent() {
    updateNote();
    updateGIF();
    updateProgressDots();
    updateBackground();
}

// Update the love note with animation
function updateNote() {
    const noteText = document.getElementById('noteText');
    gsap.to(noteText, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
            noteText.textContent = notes[currentIndex];
            gsap.to(noteText, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out"
            });
        }
    });
}

// Update the GIF display
function updateGIF() {
    const gifImg = document.getElementById('gifDisplay');
    gsap.to(gifImg, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
            gifImg.src = gifs[currentIndex];
            gsap.to(gifImg, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out"
            });
        }
    });
}

// Update the background color
function updateBackground() {
    const colors = [
        "linear-gradient(45deg, #FFE5F1, #FFB6C1, #FFC0CB, #FFE4E1, #FFE5F1)",
        "linear-gradient(45deg, #FFB6C1, #FFC0CB, #FFE4E1, #FFE5F1, #FFB6C1)",
        "linear-gradient(45deg, #FFC0CB, #FFE4E1, #FFE5F1, #FFB6C1, #FFC0CB)",
        "linear-gradient(45deg, #FFE4E1, #FFE5F1, #FFB6C1, #FFC0CB, #FFE4E1)",
        "linear-gradient(45deg, #FFE5F1, #FFB6C1, #FFC0CB, #FFE4E1, #FFE5F1)"
    ];
    document.body.style.background = colors[currentIndex];
}

// Create progress dots
function createProgressDots() {
    const container = document.getElementById('progressDots');
    for (let i = 0; i < notes.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'w-3 h-3 rounded-full bg-pink-300';
        container.appendChild(dot);
    }
}

// Update progress dots
function updateProgressDots() {
    const dots = document.querySelectorAll('#progressDots div');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.className = 'w-3 h-3 rounded-full bg-pink-500 beating';
        } else {
            dot.className = 'w-3 h-3 rounded-full bg-pink-300';
        }
    });
}

// Create floating decorations
function createDecorations() {
    const decorations = document.getElementById('decorations');
    const elements = ['✨', '💖', '🌸', '🎀', '🧸'];
    
    for (let i = 0; i < 20; i++) {
        const decoration = document.createElement('div');
        const element = elements[Math.floor(Math.random() * elements.length)];
        decoration.textContent = element;
        decoration.className = 'absolute sparkling';
        decoration.style.left = `${Math.random() * 100}%`;
        decoration.style.top = `${Math.random() * 100}%`;
        decoration.style.fontSize = `${Math.random() * 20 + 10}px`;
        decoration.style.opacity = '0.6';
        decorations.appendChild(decoration);
    }
}

// Handle next button click
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % notes.length;
    updateContent();
});

// Initialize the page
initialize();

document.getElementById('nextPageButton').addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 1,
        onComplete: () => window.location.href = 'nextPage.html'
    });
});

// Initialize the page
initialize();