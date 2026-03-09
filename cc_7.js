// Select the input, button, and CTA headline
const headlineInput = document.querySelector("#headline-input");
const updateBtn = document.querySelector("#update-btn");
const ctaHeadline = document.querySelector("#cta-headline");

// Update the CTA text when button is clicked
updateBtn.addEventListener("click", function () {
    ctaHeadline.textContent = headlineInput.value;
});
