const title = React.createElement('h1', null, 'Postits v0')
const salutation = React.createElement('p', null, 'hola mundo')

const fruits = ['anana', 'lima', 'banana', 'apple', 'orange']

const items = []

fruits.forEach(fruit => {
    const item = React.createElement('li', null, fruit)

    items.push(item)
})

const list = React.createElement('ul', null, items)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render([title, salutation, list])
