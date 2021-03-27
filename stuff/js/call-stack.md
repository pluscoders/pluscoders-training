```js
var add = function(a, b) { 
    debugger

    return a + b 
}

var mul = function(a, b) { 
    debugger

    return a * b 
}

var calc = function(a, b) { // a * (a + b + a * b) * b
    debugger

    return mul(mul(a, add(add(a, b), mul(a, b))), b)
}
```