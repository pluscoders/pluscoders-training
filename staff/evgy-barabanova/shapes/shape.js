class Shape {
  constructor(color, width, height) {
    const container = document.createElement('div')

    // const style = container.style
    const { style } = container // destructuring (es6)

    style.position = 'absolute'
    style.backgroundColor = color
    style.width = `${width}px`
    style.height = `${height}px`

    this.container = container

    this.x = 0
    this.y = 0
  }

  moveX(distance) {
    this.x = this.x + distance

    this.container.style.left = `${this.x}px`
  }

  moveY(distance) {
    this.y = this.y + distance

    this.container.style.top = `${this.y}px`
  }
}
