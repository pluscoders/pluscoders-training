console.log('%cHello, World!', 'font-family: Verdana; color: violet; font-size: 32px; font-weight: bold;')

var step = ' '
var steps = ''

setInterval(function () {
    steps += step // steps = steps + step

    console.clear()

    console.log('%c' + steps + '🎠', 'font-size: 24px;')
}, 1000) // 1000ms = 1s