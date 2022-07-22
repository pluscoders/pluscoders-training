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

        this.state = { bits: [new Bit(0, 0)], direction: null }

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
        const { state: { direction, bits } } = this

        if (direction !== 'up') {    
            const preBit = bits[bits.length - 1]
            const newBit = new Bit(preBit.x, preBit.y + 1)
            
            const newBits = bits.concat(newBit)
            
            this.setState({ bits: newBits, direction: 'down' })
        }
    }

    handleRightButtonClicked(event) {
        const { state: { direction, bits } } = this

        if (direction !== 'left') {
            const preBit = bits[bits.length - 1]
            const newBit = new Bit(preBit.x + 1, preBit.y)
    
            const newBits = bits.concat(newBit)
    
            this.setState({ bits: newBits, direction: 'right' })
        }
    }

    handleUpButtonClicked(event) {
        const { state: { direction, bits } } = this

        if (direction !== 'down') {
            const preBit = bits[bits.length - 1]
            const newBit = new Bit(preBit.x, preBit.y - 1)
    
            const newBits = bits.concat(newBit)
    
            this.setState({ bits: newBits, direction: 'up' })
        }
    }

    handleLeftButtonClicked(event) {
        const { state: { direction, bits } } = this

        if (direction !== 'right') {
            const preBit = bits[bits.length - 1]
            const newBit = new Bit(preBit.x - 1, preBit.y)
    
            const newBits = bits.concat(newBit)
    
            this.setState({ bits: newBits, direction: 'left' })
        }
    }

    render() {
        const { state: { bits } } = this

        const snake = bits.map(bit => {
            return <div className="snake-bit" style={{ left: bit.x * STEP, top: bit.y * STEP }}></div >
        })

        return <div class="board" >
            <div className="keyboard">
                <button onClick={this.handleLeftButtonClicked}>Left</button>
                <button onClick={this.handleUpButtonClicked}>Up</button>
                <button onClick={this.handleDownButtonClicked}>Down</button>
                <button onClick={this.handleRightButtonClicked}>Right</button>
            </div>

            {snake}
        </div >
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Snake />)

// TODO learn React component life cycle methods