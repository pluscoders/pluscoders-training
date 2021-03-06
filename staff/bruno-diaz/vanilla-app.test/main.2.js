// Add text

function createH1(text) {
    var h1 = document.createElement('h1')

    h1.style.color = 'white'
    h1.style.textShadow = '-2px -2px 0 #ECECEC, 2px -2px 0 #ECECEC, -2px 2px 0 #ECECEC, 2px 2px 0 #ECECEC'

    h1.innerText = text

    return h1
}
// creo el elemento title
var title = createH1('hola mundo')




// Add switch

function createDimmer(onOn, onOff) {
    var dimmer = document.createElement('div')

    dimmer.style.width = '50px'
    dimmer.style.height = '50px'
    dimmer.style.borderStyle = 'solid'
    dimmer.style.borderWidth = '2px'
    dimmer.style.padding = '2px'
    dimmer.style.borderRadius = '50%'
    dimmer.style.display = 'flex'
    dimmer.style.justifyContent = 'center'
    dimmer.style.alignItems = 'center' 

    var button = document.createElement('button')

    button.innerText = 'ON'
    button.style.width = '46px'
    button.style.height = '46px'
    button.style.border = 'none'
    button.style.borderRadius = '50%'
    button.style.backgroundColor = 'green'
    button.style.color = 'white'
    button.style.outline = 'none'

    dimmer.append(button)

    button.onclick = function() {
        if (button.innerText === 'ON') {
            button.style.backgroundColor = 'red'
            button.innerText = 'OFF'
            
            onOn()
        } else {
            button.style.backgroundColor = 'green'
            button.innerText = 'ON'
            
            onOff()
        }
    }

    return dimmer
}

// Funcionalidad del elemento
// creo el elemento dimmer
var dimmer = createDimmer(
    function() {
        console.log('ON')
        title.style.color = 'black'
    },
    function() {
        console.log('OFF')
        title.style.color = 'white'
    }
)



// Pintar los elementos creados en body
document.body.append(title)
document.body.append(dimmer)