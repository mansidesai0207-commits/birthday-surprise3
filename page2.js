const countdown = document.getElementById("countdown");

const burningImage = document.getElementById("burningImage");
const blownImage = document.getElementById("blownImage");

const nextButton = document.getElementById("nextButton");
const envelopePageButton = document.getElementById("envelopePageButton");

const page2Screen = document.getElementById("page2Screen");
const page3Screen = document.getElementById("page3Screen");

const birthdayMusic = document.getElementById("birthdayMusic");

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


// PAGE 2 COUNTDOWN

async function startBirthdaySurprise() {
    await wait(2000);

    for (let number = 1; number <= 3; number++) {
        countdown.textContent = number;

        countdown.style.animation = "none";
        void countdown.offsetWidth;
        countdown.style.animation = "countPop 0.5s ease";

        await wait(1000);
    }

    countdown.textContent = "";

    burningImage.style.display = "none";
    blownImage.style.display = "block";

    try {
        await birthdayMusic.play();
    } catch (error) {
        console.log("Browser requires user interaction for music.");
    }

    nextButton.classList.add("show");
}


// PAGE 2 NEXT BUTTON: SHOW PAGE 3

nextButton.addEventListener("click", function() {
    page2Screen.classList.remove("active");
    page3Screen.classList.add("active");

    // Wait 5 seconds before showing Page 3 NEXT button
    setTimeout(function() {
        envelopePageButton.classList.add("show");
    }, 5000);
});


// PAGE 3 NEXT BUTTON: OPEN PAGE 4

envelopePageButton.addEventListener("click", function() {
    window.location.href = "page4.html";
});


// START COUNTDOWN

window.addEventListener("load", startBirthdaySurprise);