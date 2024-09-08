let btnElement = document.querySelector(".btn");
let resultElement = document.querySelector(".result");
let resultContainer = document.querySelector(".result-container");
let radioButtons = document.querySelectorAll('[name="food"]');

btnElement.addEventListener("click", function(event) {
    event.preventDefault();
    let total = 0;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            total += parseInt(radioButton.value);
        }
    }
    resultElement.textContent = `${total} руб`;
    resultContainer.style.display = "block"; // show the result container
});
