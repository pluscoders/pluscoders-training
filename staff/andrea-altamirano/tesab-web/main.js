
// header

const header = document.querySelector('.header')
const phoneButton = header.querySelector('.contact-menu__phone-button')
const emailButton = header.querySelector('.contact-menu__email-button')
const phoneAnchor = phoneButton.querySelector('a')
const emailAnchor = emailButton.querySelector('a')
const openMenuButton = header.querySelector('.menu-button')
const menuList = header.querySelector('.menu')
const equipmentAnchor = menuList.querySelector('.equipment-anchor')
const equipmentDropDownButton = header.querySelector('.equipment-drop-down-button')
const equipmentList = header.querySelector('.equipment-list')
const crushersAnchor = equipmentList.querySelector('.crushers-anchor')
const servicesList = header.querySelector('.services-list')
const servicesDropDownButton = header.querySelector('.services-drop-down-button')


// main

const main = document.querySelector('main')
const equipmentPage = main.querySelector('.equipment-page')
const crusherPage = main.querySelector('.crusher-page')
const crushersAnchor2 = equipmentPage.querySelector('.crushers-anchor')
const crusher700ieAnchor = crusherPage.querySelector('.crusher700ie-anchor')
const crusher700iePage = main.querySelector('.crusher700ie-page')
const video = document.querySelector('.back-video')
const contactButton = main.querySelector('.contact-button')
const contactMadePage = main.querySelector('.contact-made-page')
const continueLookingButton = main.querySelector('.continue-looking-button')



// header

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
    menuList.classList.toggle('off')
    header.classList.toggle('header--full')
    crusherPage.classList.add('.off')
    crusher700iePage.classList.add('off')
   
}

equipmentDropDownButton.onclick = function (event) {
    equipmentDropDownButton.innerText = equipmentDropDownButton.innerText === 'arrow_drop_up' ? 'arrow_drop_down' : 'arrow_drop_up'
    equipmentList.classList.toggle('off')
}

crushersAnchor.onclick = function (event) {
    event.preventDefault()

    equipmentPage.classList.add('off')
    equipmentList.classList.toggle('off')
    crusher700iePage.classList.add('off')

    openMenuButton.click()

    crusherPage.classList.remove('off')
}

servicesDropDownButton.onclick = function (event) {
    servicesDropDownButton.innerText = servicesDropDownButton.innerText === 'arrow_drop_up' ? 'arrow_drop_down' : 'arrow_drop_up'
    servicesList.classList.toggle('off')
}

equipmentAnchor.onclick = function (event) {
    event.preventDefault()

    main.classList.remove('off')
    equipmentPage.classList.remove('off')
    crusher700iePage.classList.add('off')
    crusherPage.classList.add('off')

    openMenuButton.click()
}

// main

crushersAnchor2.onclick = function (event) {
    event.preventDefault()

    equipmentPage.classList.add('off')
    crusher700iePage.classList.add('off')
    crusherPage.classList.remove('off')
}

crusher700ieAnchor.onclick = function (event) {
    event.preventDefault()

    crusherPage.classList.add('off')
    crusher700iePage.classList.remove('off')
  
}

contactButton.onclick = function(event){
    event.preventDefault()
    crusher700iePage.classList.add('off')
    contactMadePage.classList.remove('off')   
    
}

continueLookingButton.onclick = function(event){
    event.preventDefault()
    contactMadePage.classList.addgit('off')  


}




