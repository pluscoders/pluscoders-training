console.log('TEST flat')

console.log('case 1')

var arr = [1, 2, [3, 4], 5, 6, [7, 8], 9]

var res = flat(arr)

if (res instanceof Array
    && res.length === 9
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 5
    && res[5] === 6
    && res[6] === 7
    && res[7] === 8
    && res[8] === 9) // TODO also check original array has not been changed
    console.log('ok')
else
    console.error('ko')

console.log('case 2')

var arr = ['a', 'b', 'c', ['d', 'e', ['f', 'g', ['h', 'i', 'j']]]]

var res = flat(arr, 2)

if (res instanceof Array
    && res.length === 8
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && res[6] === 'g'
    && res[7] instanceof Array
    && res[7].length === 3
    && res[7][0] === 'h'
    && res[7][1] === 'i'
    && res[7][2] === 'j')
    console.log('ok')
else
    console.error('ko')

console.log('case 3')

var arr = ['a', 'b', ['c', 'd']]

var res = flat(arr, 0)

if (res instanceof Array
    && res.length === 3
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] instanceof Array
    && res[2][0] === 'c'
    && res[2][1] === 'd')
    console.log('ok')
else
    console.error('ko')