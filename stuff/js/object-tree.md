```js
var m = { a: [0, 1, { b: ['a', 'b', 'c' ] }, function() {
    return {
        d: function() {
            return [0, 1, 2, { e: ['f', 'g', { h: 'h' }] }]
        }
    }
}] }

m.a[3]().d()[3].e[2].h
```