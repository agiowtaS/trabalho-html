const formNewsletter = document.getElementById('form-newsletter');
const emailInput = document.getElementById('email-input');
const message = document.getElementById('newsletter-message');

formNewsletter.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (email === '') {
        message.textContent = 'Digite um e-mail válido!';
        message.style.color = '#ff4d4d';
        return;
    }

    message.textContent =
        'Obrigado por acompanhar a Seleção Brasileira! 🇧🇷';
    message.style.color = '#ffdf00';
    emailInput.value = '';

});const formNewsletter = document.getElementById('form-newsletter');
const emailInput = document.getElementById('email-input');
const message = document.getElementById('newsletter-message');

formNewsletter.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (email === '') {
        message.textContent = 'Digite um e-mail válido!';
        message.style.color = '#ff4d4d';
        return;
    }

    message.textContent =
        'Obrigado por acompanhar a Seleção Brasileira! 🇧🇷';
    message.style.color = '#ffdf00';
    emailInput.value = '';

});                     