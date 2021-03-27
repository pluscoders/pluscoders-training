```js
function fun(thing) {
    thing.name = 'Pepito'
}
undefined
var n = 1
undefined
fun(n)
undefined
n
1
var o = {}
undefined
fun(o)
undefined
o
{name: "Pepito"}
```

![](./function-param-by-ref.png)