// ===== START EXPERIENCE =====
function startExperience() {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
}

// ===== TEASE MESSAGES =====
const teaseMessages = [
    "Yakin? 😏",
    "Masa sih nggak penasaran? 👀",
    "Coba pikir lagi deh 🤭",
    "Jangan gitu dong 😢",
    "Aku sedih loh 🥺",
    "Klik yang satunya ajaa 💖"
];

let teaseIndex = 0;

// ===== HANDLE NO CLICK =====
function handleNoClick() {
    const noBtn = document.getElementById("no-btn");
    const message = document.getElementById("response-message");

    // tombol kabur
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.position = "relative";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // tampilkan tease message
    message.innerHTML = `<p style="margin-top:15px; font-size:1.1rem;">${teaseMessages[teaseIndex]}</p>`;

    teaseIndex++;
    if (teaseIndex >= teaseMessages.length) {
        teaseIndex = 0;
    }
}

// ===== HANDLE YES CLICK =====
function handleYesClick() {
    const message = document.getElementById("response-message");

    message.innerHTML = `
        <h2 style="margin-top:20px;">Wanita cantik itu seperti apa?</h2>
        <p style="margin-top:10px; font-size:1.3rem;">
            Jawabannya sederhana...
        </p>
        <h1 style="margin-top:15px; font-size:2rem; color:#ff4d6d;">
            Itu kamu 💖
        </h1>
        <img src="your-photo.jpg" 
             alt="Her photo" 
             style="margin-top:20px; width:220px; border-radius:20px; box-shadow:0 10px 25px rgba(0,0,0,0.3);">
    `;

    launchConfetti();
}

// ===== CONFETTI EFFECT =====
function launchConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "💖";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "22px";
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

// ===== CONFETTI ANIMATION =====
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
