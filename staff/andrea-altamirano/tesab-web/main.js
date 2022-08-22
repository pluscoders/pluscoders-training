const phoneButton = document.querySelector('.phone')
const emailButton = document.querySelector('.email')
const phoneAnchor = phoneButton.querySelector('a')
const emailAnchor = emailButton.querySelector('a')

phoneButton.onclick = function (event) {
    emailAnchor.classList.add('off')
    phoneAnchor.classList.toggle('off')
}

emailButton.onclick = function (event) {
    phoneAnchor.classList.add('off')
    emailAnchor.classList.toggle('off')
}
const openMenuButton = document.querySelector('.material-symbols-outlined')
const closeMenuButton = document.querySelector('.material-symbols-outlined off')

menuButton.onclick = function (event) {
    openMenuButton.classList.remove('off')
    closeMenuButton.classList.add('off')
}