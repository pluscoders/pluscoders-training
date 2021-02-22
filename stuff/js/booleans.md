```js
true || false
true
1 + 0
1
true && false
false
1 * 0
0
var a = true
var b = false

if (a || b) console.log('capo')
VM5854:4 capo
undefined
var a = true
var b = false

if (a && b) console.log('capo')
undefined
var a = true
var b = false

if (a && !b) console.log('capo')
VM5900:4 capo
```