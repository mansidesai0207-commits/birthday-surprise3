
// =====================================
// BIRTHDAY WEBSITE - PASSWORD PAGE
// =====================================

// Change this to your actual 4-digit password
const correctCode = "4116";

// Store the entered password
let enteredCode = "";

// Get HTML elements
const dots = document.querySelectorAll(".dot");
const numberButtons = document.querySelectorAll("[data-number]");
const enterButton = document.querySelector(".enter-button");
const message = document.querySelector(".message");


// =====================================
// AUTOMATIC LANDSCAPE REQUEST
// =====================================

async function requestLandscape() {
    try {
        if (
            screen.orientation &&
            typeof screen.orientation.lock === "function"
        ) {
            await screen.orientation.lock("landscape");
        }
    } catch (error) {
        console.log(
            "Landscape lock is not supported. Please rotate your phone manually."
        );
    }
}

// Try landscape mode after the first user interaction
document.addEventListener("click", requestLandscape, { once: true });


// =====================================
// UPDATE PASSWORD DOTS
// =====================================

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("filled", index < enteredCode.length);
    });
}


// =====================================
// ADD NUMBER TO PASSWORD
// =====================================

function addNumber(number) {
    if (enteredCode.length >= 4) {
        return;
    }

    enteredCode += number;
    updateDots();

    if (message) {
        message.textContent = "";
    }
}


// =====================================
// CLEAR PASSWORD
// =====================================

function clearPassword() {
    enteredCode = "";
    updateDots();

    if (message) {
        message.textContent = "";
    }
}


// =====================================
// CHECK PASSWORD
// =====================================

function checkPassword() {
    if (enteredCode.length !== 4) {
        if (message) {
            message.textContent = "Please enter all 4 digits ❤️";
        }
        return;
    }

    if (enteredCode === correctCode) {
        if (message) {
            message.textContent = "Correct! Opening your surprise... ❤️";
        }

        setTimeout(() => {
            window.location.href = "page2.html";
        }, 700);

    } else {
        if (message) {
            message.textContent = "Oops! Try again 💗";
        }

        setTimeout(() => {
            clearPassword();
        }, 900);
    }
}


// =====================================
// KEYPAD BUTTON CLICKS
// =====================================

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        addNumber(button.dataset.number);
    });
});


// =====================================
// ENTER BUTTON
// =====================================

if (enterButton) {
    enterButton.addEventListener("click", checkPassword);
}


// =====================================
// PHYSICAL KEYBOARD SUPPORT
// =====================================

document.addEventListener("keydown", (event) => {

    if (/^[0-9]$/.test(event.key)) {
        addNumber(event.key);
    }

    if (event.key === "Enter") {
        checkPassword();
    }

    if (event.key === "Backspace") {
        enteredCode = enteredCode.slice(0, -1);
        updateDots();
    }

    if (event.key === "Escape") {
        clearPassword();
    }
});


// =====================================
// INITIAL SETUP
// =====================================

updateDots();
