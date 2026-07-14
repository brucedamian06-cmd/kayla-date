const title = document.getElementById("title");
const continueBtn = document.getElementById("continueBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");
const success = document.getElementById("success");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const card = document.querySelector(".card");

const text = "Hey Kayla ❤️";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 90);
    }
}

typeWriter();

continueBtn.onclick = () => {
    continueBtn.style.display = "none";

    message.innerHTML =
        "I know this is a little different... but I wanted to ask you something in a way you'd hopefully remember. 😊";

    setTimeout(() => {
        question.classList.remove("hidden");
    }, 700);
};

// Make the "No" button run away
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {

    const maxX = card.clientWidth - noBtn.offsetWidth - 30;
    const maxY = card.clientHeight - noBtn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// YES button
yesBtn.onclick = () => {

    question.classList.add("hidden");
    message.style.display = "none";

    success.classList.remove("hidden");

    confetti({
        particleCount: 250,
        spread: 100,
        origin: { y: 0.6 }
    });

};

// Floating hearts
const hearts = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}, 350);