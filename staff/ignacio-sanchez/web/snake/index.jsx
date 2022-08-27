const { Component } = React

class Bit {
    constructor(x, y) {
        console.log('Bit -> constructor')

        this.x = x
        this.y = y
    }
}

const BOARD = { x: 250, y: 250, width: 100, height: 100 }
const STEP = 10
const INTERVAL_STEP = 250

function newRandomFoodBit() {
    return new Bit(Math.round(Math.random() * (BOARD.width / STEP - 1)), Math.round(Math.random() * (BOARD.height / STEP - 1)))
}

class Snake extends Component {
    constructor() {
        console.log('Snake -> constructor')

        super()

        const food = newRandomFoodBit()

        this.state = { snake: [new Bit(0, 0)], direction: 'down', food, intervalMilis: INTERVAL_STEP * 20, status: 'playing' }
    }

    setState(newState) { // override
        console.log('Snake -> setState', newState)

        super.setState(newState)
    }

    updateInterval() {
        console.log('Snake -> updateInterval')
        
        let { state: { intervalId, intervalMilis } } = this

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

            if (newBit.x >= 0 && newBit.y >= 0 && newBit.x * STEP + STEP <= BOARD.width && newBit.y * STEP + STEP <= BOARD.height) {
                const eating = food.x === newBit.x && food.y === newBit.y

                if (eating) {
                    const newSnake = snake.concat(newBit)

                    const newFood = newRandomFoodBit()

                    this.setState({ snake: newSnake, food: newFood })

                    this.updateInterval()
                } else {
                    const newSnake = snake.slice(1).concat(newBit) // method chaining

                    this.setState({ snake: newSnake })
                }
            } else {
                this.setState({ status: 'game-over' })
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
        console.log('Snake -> render')

        const { state: { snake, food, status } } = this

        return <div class="board" style={{ left: BOARD.x, top: BOARD.y, width: BOARD.width, height: BOARD.height }}>
            {status === 'playing' ? <>
                {snake.map(bit => {
                    return <div className="snake-bit" style={{ left: bit.x * STEP, top: bit.y * STEP, width: STEP, height: STEP }}></div >
                })}
                <div className="food-bit" style={{ left: food.x * STEP, top: food.y * STEP, width: STEP, height: STEP }}></div >
            </> : <h2>Game Over</h2>}
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Snake />)

// TODO learn React component life cycle methods