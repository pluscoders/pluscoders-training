// React with JSX

const title = <h1>hello world</h1> // <h1>...</h1>

const fruits = ['Apples', 'Oranges', 'Bananas']

const items = fruits.map(fruit => <li>{fruit}</li>) // <li>...</li><li>...</li>...

const list = <ul>{items}</ul> // <ul>...</ul>

const main = <main>
  {title}
  {list}
</main> // <main>...</main>


ReactDOM.render(main, document.getElementById('root'))
