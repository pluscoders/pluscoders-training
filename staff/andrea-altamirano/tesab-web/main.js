const header = document.querySelector('.header')
const phoneButton = header.querySelector('.contact-menu__phone-button')
const emailButton = header.querySelector('.contact-menu__email-button')
const phoneAnchor = phoneButton.querySelector('a')
const emailAnchor = emailButton.querySelector('a')
const openMenuButton = header.querySelector('.menu-button')
const menuList = header.querySelector('.menu-options')
const equipmentDropDownButton = header.querySelector('.equipment-drop-down-button')
const equipment = header.querySelector('.equipment')
const services = header.querySelector('.services')
const servicesDropDownButton = header.querySelector('.services-drop-down-button')

phoneButton.onclick = function (event) {
    emailAnchor.classList.add('off')
    phoneAnchor.classList.toggle('off')
}

emailButton.onclick = function (event) {
    phoneAnchor.classList.add('off')
    emailAnchor.classList.toggle('off')
}

openMenuButton.onclick = function (event) {
    openMenuButton.innerText = openMenuButton.innerText === 'menu' ? 'close' : 'menu'

    header.classList.toggle('header--full')
    menuList.classList.toggle('off')
}

equipmentDropDownButton.onclick = function (event) {
    equipmentDropDownButton.innerText = equipmentDropDownButton.innerText === 'arrow_drop_up' ? 'arrow_drop_down' : 'arrow_drop_up'
    equipment.classList.toggle('off')
}

servicesDropDownButton.onclick = function(event){
    servicesDropDownButton.innerText = servicesDropDownButton.innerText === 'arrow_drop_up'? 'arrow_drop_down' : 'arrow_drop_up'
    services.classList.toggle('off')
}

