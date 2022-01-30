const face = new Shape('pink', 100, 100)

const mouth = new Shape('black', 50, 10)
mouth.moveX(25)
mouth.moveY(75)

face.container.append(mouth.container)

document.body.append(face.container)
