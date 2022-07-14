var robot = document.querySelector('.robot')

var x = 200, y = 200

robot.style.left = x + 'px'
robot.style.bottom = y + 'px'

var step = 20

document.onkeydown = function(event) {
    var key = event.key
    
    console.log(key)

    if (key === 'ArrowUp') {
        y = y + step
    
        robot.style.bottom = y + 'px'
    } else if(key === 'ArrowDown') {
        y = y - step
    
        robot.style.bottom = y + 'px'
    } else if(key === 'ArrowRight') {
        x = x + step
    
        robot.style.left = x + 'px'
    } else if(key === 'ArrowLeft') {
        x = x - step
    
        robot.style.left = x + 'px'
    }
}