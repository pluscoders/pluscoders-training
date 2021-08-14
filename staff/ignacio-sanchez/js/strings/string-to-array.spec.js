describe('stringToArray()')
// 1

var spec = 'should send "Hello World" into ["H","e","l","l","o"," ","w","o","r","l","d"]'

var arr = stringToArray('Hello World')

assert (arr[0] === 'H' && arr[1] === 'e' && arr[2] === 'l' && arr[3] === 'l' && arr[4] === 'o' 
&& arr[5] === ' ' && arr[6] === 'W' && arr[7] === 'o' && arr[8] === 'r' 
&& arr[9] === 'l' && arr[10] === 'd',spec)

// 2

var spec = 'should send "12 balls" into ["1","2"," ","b","a","l","l","s"]'

var arr = stringToArray('12 balls')

assert (arr[0] === '1' && arr[1] === '2' && arr[2] === ' ' && arr[3] === 'b' && arr[4] === 'a' 
&& arr[5] === 'l' && arr[6] === 'l' && arr[7] === 's',spec)

// 3

var spec = 'should send "PlusCoderS" into ["P","l","u","s","C","o","d","e","r","S"]'

var arr = stringToArray('PlusCoderS')

assert (arr[0] === 'P' && arr[1] === 'l' && arr[2] === 'u' && arr[3] === 's' && arr[4] === 'C' 
&& arr[5] === 'o' && arr[6] === 'd' && arr[7] === 'e' && arr[8] === 'r' && arr[9] === 'S',spec)