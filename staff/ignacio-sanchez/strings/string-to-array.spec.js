describe('stringToArray()')

// 1

var spec = 'should send "Hello World" into ["H","e","l","l","o"," ","w","o","r","l","d"]'

var arr = stringToArray('Hello World')

assert (arr[0] === 'H' && arr[1] === 'e' && arr[2] === 'l' && arr[3] === 'l' && arr[4] === 'o' 
&& arr[5] === ' ' && arr[6] === 'W' && arr[7] === 'o' && arr[8] === 'r' 
&& arr[9] === 'l' && arr[10] === 'd',spec)