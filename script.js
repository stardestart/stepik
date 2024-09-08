const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const sendButton = document.getElementById('send');
const greetingParagraph = document.getElementById('greeting');

sendButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();

    if (name && surname) {
        const greeting = `Здравствуйте, ${name} ${surname}!`;
        greetingParagraph.textContent = greeting;
    } else {
        greetingParagraph.textContent = '';
    }
});
