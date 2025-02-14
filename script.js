const messages = [
    "Are you sure?",
    "Really really sure?",
    "Pretty Please?",
    "I'm going to cry... :(",
    "REALLY sure?",
    "pretty please?",
    "I'm on my knees",
    "PLEASE?",
    "PLEASE PLEASE PLEASE PLEASE PL",
    "stop",
    "NOT ALLowed",
    "STOP",
    ":(",
    ":( ;(",
    "I'm sad now",
    "Nope",
    "Don't be mean ;(",
];

let currentMessageIndex = 0;

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let yesScale = 1;
let noScale = 1;

function updateYes() {
    document.getElementById("joe").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBLccBEckQwuDmqMRCRHHkxNh79NGp5nBdg&s"
    yesButton.textContent = 'Yippieee!'
    noButton.style.display = 'none'
    yesButton.style.transform = `scale(1.6)`;
    ;
    document.getElementById("message1").textContent = "Thank you your radiant beauty- for granting my heart ease."
    document.getElementById("message2").textContent = "(ehehehe I knew you would say yes)"
}

yesButton.addEventListener("click", updateYes);

noButton.addEventListener("click", () => {
    yesScale += 0.2;
    yesButton.style.transform = `scale(${yesScale})`;

    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`;

    teleportButton(noButton);

    noButton.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});

function teleportButton(button) {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const card = document.querySelector('.card')
    const cardRect = card.getBoundingClientRect()

    const padding = 20;

    // Calculate safe boundaries for the button
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;

    // Ensure the button doesn't overlap with the card
    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        // Check if the button overlaps with the card
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );

    
    // Apply the new position
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}