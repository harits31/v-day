// ===== START EXPERIENCE =====
function startExperience() {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
}

// ===== HANDLE YES CLICK =====
function handleYesClick() {
    const message = document.getElementById("response-message");

    message.innerHTML = `
        <h2 style="margin-top:20px;">You just made my day 💖</h2>
        <p style="margin-top:10px; font-size:1.2rem;">
            I promise this was worth the wait ✨
        </p>
    `;

    launchConfetti();
}

// ===== HANDLE NO CLICK (Button Runs Away) =====
function handleNoClick() {
    const noBtn = document.getElementById("no-btn");

    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.position = "relative";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// ===== CONFETTI EFFECT =====
function launchConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "💖";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// ===== MUSIC TOGGLE =====
function toggleMusic() {
    const music = document.getElementById("bg-music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// ===== CONFETTI ANIMATION STYLE =====
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
