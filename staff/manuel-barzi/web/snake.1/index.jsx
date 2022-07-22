const { Component } = React

class Snake extends Component {
    constructor() {
        super()

        this.state = { length: 10 }
    }

    render() {
        // const length = this.state.length
        const { state: { length } } = this

        const snake = []

        for (let i = 0; i < length; i++)
            snake.push(<div className="snake-bit"></div>)

        return <div class="board">
            {snake}
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Snake />)