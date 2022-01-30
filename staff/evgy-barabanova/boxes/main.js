// DONE create a definition of Box with color, width, height, and length properties

class Box {
  constructor(color, width, height, length) {
    this.color = color
    this.width = width
    this.height = height
    this.length = length
  }

  // DONE create a method 'getVolume()' that returns the cubic volume of the box

  getVolume() {
    return this.width * this.height * this.length
  }
}
// DONE create 1000 boxes with random colors and dimensions (width, height, length) (1)

const colors = ['red', 'orange', 'green', 'yellow', 'black', 'white', 'blue', 'pink', 'grey', 'violet']

const boxes = new Array(100)

function randomInteger(min, max) {
  return min + Math.round(Math.random() * (max - min))
}

for (let i = 0; i < boxes.length; i++) {
  const color = colors[randomInteger(0, colors.length - 1)]
  const width = randomInteger(5, 50)
  const height = randomInteger(5, 50)
  const length = randomInteger(5, 50)

  const box = new Box(color, width, height, length)

  boxes[i] = box
}

boxes.forEach(box => console.log(box.color, box.width, box.height, box.length, box.getVolume()))

// DONE calculate how many boxes are pink? 

console.log(boxes.reduce((accum, box) => accum + (box.color === 'pink' ? 1 : 0), 0))

// DONE calculate how many boxes have width > 10 and height > 10 and length > 10?

console.log(boxes.reduce((sum, box) => sum + (box.length > 10 && box.height > 10 && box.width > 10 ? 1 : 0), 0))

// DONE statistics: count how many boxes of each color we have (use one reduce for that and an object as an acumulator)

console.log(boxes.reduce((accum, box) => {
  if (box.color === 'pink') accum.pink++
  else if (box.color === 'red') accum.red++
  else if (box.color === 'orange') accum.orange++
  else if (box.color === 'green') accum.green++
  else if (box.color === 'yellow') accum.yellow++
  else if (box.color === 'black') accum.black++
  else if (box.color === 'white') accum.white++
  else if (box.color === 'blue') accum.blue++
  else if (box.color === 'violet') accum.violet++
  else if (box.color === 'grey') accum.grey++
  
  return accum
}, { red: 0, orange: 0, green: 0, yellow: 0, black: 0, white: 0, blue: 0, pink: 0, grey: 0, violet: 0 }));

// DONE add all boxes to the html (using divs with height and width and forEach method)



boxes.forEach(_box => {
  const box = document.createElement('div')

  box.style.width = `${_box.width}px`
  box.style.height = `${_box.height}px`
  box.style.backgroundColor = _box.color
  box.style.margin = '2px'
  
  document.body.append(box)
})
