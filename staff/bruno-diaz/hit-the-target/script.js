// TODO implement with recursion

const positionCircle = (i) => {
    if(i > 0) {
        dot.down()
        dot.right()
        positionCircle (i - 1)
    }
}

positionCircle(26)