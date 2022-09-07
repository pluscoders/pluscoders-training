const title = <h1>Postits v0</h1>
const salutation = <p>hola mundo</p>

const fruits = ['anana', 'lima', 'banana', 'apple', 'orange']

const items = []

fruits.forEach(fruit => {
    const item = <li>{fruit}</li>

    items.push(item)
})

const list = <ul>{items}</ul>

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render([title, salutation, list])
