   // Create falling teddies with hearts
   function createTeddyRain() {
    const elements = ['🧸', '💗', '✨', '🎀'];
    const teddy = document.createElement('div');
    teddy.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    teddy.className = 'teddy-rain text-2xl';
    teddy.style.left = Math.random() * 100 + 'vw';
    teddy.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(teddy);
    
    setTimeout(() => {
        teddy.remove();
    }, 5000);
}

// Start teddy rain
setInterval(createTeddyRain, 400);

// Main teddy interaction with sparkle effect
const mainTeddy = document.getElementById('mainTeddy');
mainTeddy.addEventListener('click', () => {
    mainTeddy.classList.add('scale-125');
    createSparkles();
    setTimeout(() => {
        mainTeddy.classList.remove('scale-125');
    }, 200);
});

function createSparkles() {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        sparkle.style.animation = 'float 1s ease-out forwards';
        mainTeddy.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Surprise message with enhanced animation
setTimeout(() => {
    const surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    gsap.from(surprise, {
        scale: 0,
        rotation: 720,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
    });
    setTimeout(() => {
        gsap.to(surprise, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            onComplete: () => surprise.classList.add('hidden')
        });
    }, 3000);
}, 10000);

// Next button interaction with rainbow trail
document.getElementById('nextButton').addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 1,
        onComplete: () => window.location.href = 'Teddy.html'
    });
});