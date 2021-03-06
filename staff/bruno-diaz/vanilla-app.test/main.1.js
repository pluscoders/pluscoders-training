document.open()
document.write('<body></body>')

function createH1(text) {
    var h1 = document.createElement('h1')

    h1.innerText = text

    return h1
}

var title = createH1('hola mundo')

document.body.append(title)

function createSwitch() {
    var container = document.createElement('div')

    container.style.width = '50px'
    container.style.height = '50px'
    container.style.borderStyle = 'solid'
    container.style.borderWidth = '2px'
    container.style.padding = '2px'
    container.style.borderRadius = '50%'
    container.style.display = 'flex'
    container.style.justifyContent = 'center'
    container.style.alignItems = 'center' 

    var button = document.createElement('button')

    button.innerText = 'ON'
    button.style.width = '46px'
    button.style.height = '46px'
    button.style.border = 'none'
    //button.style.padding = '5px'
    button.style.borderRadius = '50%'
    button.style.backgroundColor = 'green'
    button.style.color = 'white'
    button.style.outline = 'none'

    button.onclick = function() {
        if (button.innerText === 'ON') {
            button.style.backgroundColor = 'red'
            button.innerText = 'OFF'
        } else {
            button.style.backgroundColor = 'green'
            button.innerText = 'ON'
        }
    }

    container.append(button)

    return container
}

var _switch = createSwitch()

document.body.append(_switch)