const title = document.getElementById("title");
const continueBtn = document.getElementById("continueBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");
const success = document.getElementById("success");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const card = document.querySelector(".card");

const text = "Hey Kayla ";

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

// Make the "No" button impossible to press
let escapes = 0;

function moveButton(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const cardRect = card.getBoundingClientRect();

    const maxX = cardRect.width - noBtn.offsetWidth - 20;
    const maxY = cardRect.height - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    escapes++;

    if (escapes === 5) {
        noBtn.textContent = "😜";
    }

    if (escapes === 8) {
        noBtn.style.transform = "scale(0.6)";
    }

    if (escapes >= 10) {
        noBtn.style.display = "none";

        yesBtn.style.transform = "scale(1.3)";
        yesBtn.textContent = "YES ";
    }
}

["mouseenter","mousemove","mouseover","touchstart","touchmove","click"].forEach(event=>{
    noBtn.addEventListener(event, moveButton, { passive:false });
});


noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton, { passive: false });
noBtn.addEventListener("click", moveButton);

// YES button
yesBtn.onclick = () => {

    // Submit YES to Google Form
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSf7RiDJsJVYdJdu-R4sRBull-8Yo-EA8xUCM6SbjH8Ad84XBg/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "entry.1794546234=Yes"
    });

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

    heart.innerHTML = "";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}, 350);
