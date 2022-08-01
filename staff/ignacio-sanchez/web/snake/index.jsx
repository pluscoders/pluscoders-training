const { Component } = React

class Bit {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const STEP = 11
const INTERVAL_STEP = 25

class Snake extends Component {
    constructor() {
        console.log('Snake -> constructor')

        super()

        const food = new Bit(Math.round(Math.random() * 10), Math.round(Math.random() * 20))

        this.state = { snake: [new Bit(0, 0)], direction: 'down', food, intervalMilis: INTERVAL_STEP * 10 }
    }

    updateInterval() {
        let { state : {intervalId, intervalMilis} } = this

        if (intervalId !== undefined)
            clearInterval(intervalId)

        //intervalMilis = intervalMilis - INTERVAL_STEP
        intervalMilis -= INTERVAL_STEP

        intervalId = setInterval(() => {
            const { state: { snake, food, direction } } = this

            const preBit = snake[snake.length - 1]

            let newBit

            switch (direction) {
                case 'up':
                    newBit = new Bit(preBit.x, preBit.y - 1)
                    break

                case 'down':
                    newBit = new Bit(preBit.x, preBit.y + 1)
                    break

                case 'left':
                    newBit = new Bit(preBit.x - 1, preBit.y)
                    break

                case 'right':
                    newBit = new Bit(preBit.x + 1, preBit.y)
                    break

                default:
                    break
            }

            const eating = food.x === newBit.x && food.y === newBit.y

            if (eating) {
                const newSnake = snake.concat(newBit)

                const newFood = new Bit(Math.round(Math.random() * 10), Math.round(Math.random() * 20))

                this.setState({ snake: newSnake, food: newFood })

                this.updateInterval()[]
            } else {
                const newSnake = snake.slice(1).concat(newBit) // method chaining

                this.setState({ snake: newSnake })
            }
        }, intervalMilis)

        this.setState({ intervalId, intervalMilis })
    }

    componentDidMount() {
        console.log('Snake -> componentDidMount')

        this.updateInterval()

        document.addEventListener('keydown', event => {
            console.log('document -> keydown')

            const { key } = event

            const { state: { direction } } = this

            let newDirection = direction

            switch (key) {
                case 'ArrowUp':
                    if (direction !== 'down')
                        newDirection = 'up'
                    break

                case 'ArrowDown':
                    if (direction !== 'up')
                        newDirection = 'down'
                    break

                case 'ArrowLeft':
                    if (direction !== 'right')
                        newDirection = 'left'
                    break

                case 'ArrowRight':
                    if (direction !== 'left')
                        newDirection = 'right'
                    break

                default:
                    break
            }

            this.setState({ direction: newDirection })
        })

    }

    render() {
        const { state: { snake, food } } = this

        return <div class="board" >
            {snake.map(bit => {
                return <div className="snake-bit" style={{ left: bit.x * STEP, top: bit.y * STEP }}></div >
            })}
            <div className="food-bit" style={{ left: food.x * STEP, top: food.y * STEP }}></div >
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Snake />)

// TODO learn React component life cycle methods