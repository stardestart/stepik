let btnElement = document.querySelector(".btn");
let resultElement = document.querySelector(".result");
let radioButtons = document.querySelectorAll('[name="food"]');

btnElement.addEventListener("click", function(event) {
    event.preventDefault(); // добавьте эту строку
    let total = 0;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            total += parseInt(radioButton.value);
        }
    }
    resultElement.textContent = `Общая стоимость: ${total} руб`;
});
