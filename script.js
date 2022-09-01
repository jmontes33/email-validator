const submit = document.querySelector('.submit-btn')

submit.addEventListener('click', function() {

    const inputText = document.querySelector('.email')

    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const emailMsg = document.querySelector('.email-notification')

    if (mailFormat.test(inputText.value)) {
        emailMsg.style.display = 'none';
        inputText.style.cssText = 'border: solid 2px rgb(137, 255, 147);'
        return true;
    } else {
        emailMsg.style.display = 'block';
        inputText.style.cssText = 'border: solid 2px rgb(255, 137, 137);'
        return false;
    }
})