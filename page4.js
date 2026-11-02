
const envelopeScene = document.getElementById("envelopeScene");
const openEnvelope = document.getElementById("openEnvelope");
const envelopeCaption = document.getElementById("envelopeCaption");

openEnvelope.addEventListener("click", function() {

    envelopeScene.classList.add("open");

    envelopeCaption.textContent = "A little letter, written from my heart ❤️";

});
