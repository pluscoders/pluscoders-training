const face = new Shape('pink', 100, 100)

const mouth = new Shape('red', 30, 5)
mouth.moveX(35)
mouth.moveY(75)

face.container.append(mouth.container)

const mouth2 = new Shape('red', 5, 5)
mouth2.moveX(30)
mouth2.moveY(72)

face.container.append(mouth2.container)

const mouth3 = new Shape('red', 5, 5)
mouth3.moveX(65)
mouth3.moveY(72)

face.container.append(mouth3.container)
// TODO complete the face (eyes with pupils, nose, ears, ...)

const eyes1 = new Shape('white', 15, 15)
eyes1.moveX(25)
eyes1.moveY(30)

face.container.append(eyes1.container)

const eyes2 = new Shape('white', 15, 15)
eyes2.moveX(60)
eyes2.moveY(30)

face.container.append(eyes2.container)

const pupil1 = new Shape('blue', 5, 5)
pupil1.moveX(30)
pupil1.moveY(35)

face.container.append(pupil1.container)

const pupil2 = new Shape('blue', 5, 5)
pupil2.moveX(65)
pupil2.moveY(35)

face.container.append(pupil2.container)

const brow = new Shape('black', 20, 3)
brow.moveX(22)
brow.moveY(23)

face.container.append(brow.container)

const brow2 = new Shape('black', 8, 3)
brow2.moveX(60)
brow2.moveY(23)

face.container.append(brow2.container)

const brow3 = new Shape('black', 8, 3)
brow3.moveX(67)
brow3.moveY(20)

face.container.append(brow3.container)

const brow4 = new Shape('black', 8, 3)
brow4.moveX(73)
brow4.moveY(17)

face.container.append(brow4.container)

const nose = new Shape('brown', 10, 3)
nose.moveX(45)
nose.moveY(57)

face.container.append(nose.container)
// TODO create other shapes to build a full body

const body = new Shape('pink', 55, 30)
body.moveX(23)
body.moveY(90)

face.container.append(body.container)

const tShort = new Shape('yellow', 110, 60)
tShort.moveX(-5)
tShort.moveY(120)

face.container.append(tShort.container)


document.body.append(face.container)
