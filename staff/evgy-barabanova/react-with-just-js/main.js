// React with just JS (vanilla)

const title = React.createElement('h1', null, 'hello world') // <h1>...</h1>

const fruits = ['Apples', 'Oranges', 'Bananas']

const items = fruits.map(fruit => React.createElement('li', null, fruit)) // <li>...</li><li>...</li>...

const list = React.createElement('ul', null, items) // <ul>...</ul>

const main = React.createElement('main', null, [title, list]) // <main>...</main>

ReactDOM.render(main, document.getElementById('root'))
