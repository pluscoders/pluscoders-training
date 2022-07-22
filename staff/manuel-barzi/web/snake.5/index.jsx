const { Component } = React

class Bit {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const STEP = 11

class Snake extends Component {
    constructor() {
        super()

        const food = []

        food.push(new Bit(Math.round(Math.random() * 10), Math.round(Math.random() * 20)))
        food.push(new Bit(Math.round(Math.random() * 10), Math.round(Math.random() * 20)))
        food.push(new Bit(Math.round(Math.random() * 10), Math.round(Math.random() * 20)))

        this.state = { snake: [new Bit(0, 0)], direction: 'down', food }

        // TODO see Function.prototype.bind() / .call() / .apply()
        this.handleDownButtonClicked = this.handleDownButtonClicked.bind(this)
        this.handleRightButtonClicked = this.handleRightButtonClicked.bind(this)
        this.handleUpButtonClicked = this.handleUpButtonClicked.bind(this)
        this.handleLeftButtonClicked = this.handleLeftButtonClicked.bind(this)
    }

    handleKeyPressed(event) {
        console.log(event)
    }

    handleDownButtonClicked(event) {
        const { state: { direction, snake, food } } = this

        if (direction !== 'up') {
            const preBit = snake[snake.length - 1]
            const newBit = new Bit(preBit.x, preBit.y + 1)

            const eating = food.some(foodBit => foodBit.x === newBit.x && foodBit.y === newBit.y)

            const newBits = eating ? snake.concat(newBit) : snake.slice(1).concat(newBit)

            this.setState({ snake: newBits, direction: 'down' })
        }
    }

    handleRightButtonClicked(event) {
        const { state: { direction, snake, food } } = this

        if (direction !== 'left') {
            const preBit = snake[snake.length - 1]
            const newBit = new Bit(preBit.x + 1, preBit.y)

            const eating = food.some(foodBit => foodBit.x === newBit.x && foodBit.y === newBit.y)

            const newBits = eating ? snake.concat(newBit) : snake.slice(1).concat(newBit)

            this.setState({ snake: newBits, direction: 'right' })
        }
    }

    handleUpButtonClicked(event) {
        const { state: { direction, snake, food } } = this

        if (direction !== 'down') {
            const preBit = snake[snake.length - 1]
            const newBit = new Bit(preBit.x, preBit.y - 1)

            const eating = food.some(foodBit => foodBit.x === newBit.x && foodBit.y === newBit.y)

            const newBits = eating ? snake.concat(newBit) : snake.slice(1).concat(newBit)

            this.setState({ snake: newBits, direction: 'up' })
        }
    }

    handleLeftButtonClicked(event) {
        const { state: { direction, snake, food } } = this

        if (direction !== 'right') {
            const preBit = snake[snake.length - 1]
            const newBit = new Bit(preBit.x - 1, preBit.y)

            const eating = food.some(foodBit => foodBit.x === newBit.x && foodBit.y === newBit.y)

            const newBits = eating ? snake.concat(newBit) : snake.slice(1).concat(newBit)

            this.setState({ snake: newBits, direction: 'left' })
        }
    }

    render() {
        const { state: { snake, food } } = this

        const snakeBits = snake.map(bit => {
            return <div className="snake-bit" style={{ left: bit.x * STEP, top: bit.y * STEP }}></div >
        })

        const foodBits = food.map(bit => {
            return <div className="food-bit" style={{ left: bit.x * STEP, top: bit.y * STEP }}></div >
        })

        return <div class="board" >
            <div className="keyboard">
                <button onClick={this.handleLeftButtonClicked}>Left</button>
                <button onClick={this.handleUpButtonClicked}>Up</button>
                <button onClick={this.handleDownButtonClicked}>Down</button>
                <button onClick={this.handleRightButtonClicked}>Right</button>
            </div>

            {snakeBits}
            {foodBits}
        </div >
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Snake />)

// TODO learn React component life cycle methods