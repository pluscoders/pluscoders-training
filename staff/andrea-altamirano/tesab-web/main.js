const phoneButton = document.querySelector('.phone')
const emailButton = document.querySelector('.email')
const phoneAnchor = phoneButton.querySelector('a')
const emailAnchor = emailButton.querySelector('a')

phoneButton.onclick = function(event) {
    emailAnchor.classList.add('off')
    phoneAnchor.classList.toggle('off')
}

emailButton.onclick = function(event) {
    phoneAnchor.classList.add('off')
    emailAnchor.classList.toggle('off')
}