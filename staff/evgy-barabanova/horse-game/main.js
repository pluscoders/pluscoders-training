var horseDiv = document.querySelector('.horse')

horseDiv.style.fontSize = '100px'
horseDiv.style.position = 'absolute'
horseDiv.style.cursor = 'pointer'

horseDiv.style.left = '300px'
horseDiv.style.top = '300px'

var step = 10
var steps = 0

setInterval(function () {
    steps += step // steps = steps + step

    if (steps > 500)
        step = -10
    else if (steps < 50)
        step = 10

    horseDiv.style.left = steps + 'px'
    horseDiv.style.top = steps + 'px'
}, 10) // 1000ms = 1s

var points = 0

horseDiv.onclick = function () {
    points++

    alert('💥 points: ' + points)
}