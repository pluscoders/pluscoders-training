const { Component } = React

class Snake extends Component {
    constructor() {
        super()

        this.state = { length: 0 }

        // TODO see Function.prototype.bind() / .call() / .apply()
        this.handleBitButtonClicked = this.handleBitButtonClicked.bind(this)
    }

    handleKeyPressed(event) {
        console.log(event)
    }

    handleBitButtonClicked(event) {
        this.setState({ length: this.state.length + 1 })
    }

    render() {
        // const length = this.state.length
        const { state: { length } } = this

        const snake = []

        for (let i = 0; i < length; i++)
            snake.push(<div className="snake-bit"></div>)

        return <div class="board">
            <div className="keyboard">
                {/* <button>Left</button>
                <button>Up</button>
                <button>Down</button>
                <button>Right</button> */}

                <button onClick={this.handleBitButtonClicked}>bit ++</button>
            </div>

            {snake}
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Snake />)