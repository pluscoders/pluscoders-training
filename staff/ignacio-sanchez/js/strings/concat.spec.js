describe('concat()')
// 1

var spec = 'should conact 1,2,3,4 into "1234"'

var result = concat(1, 2, 3, 4)

assert (result === '1234',spec)

// 2

var spec = 'should conact "no", "much", "to", "concat", "here" into "nomuchtoconcathere"'

var result = concat('no', 'much', 'to', 'concat', 'here')

assert (result === 'nomuchtoconcathere',spec)

// 3

var spec = 'should conact "if", "there", "is", "a", "new", "world" into "ifthereisanewworld"'

var result = concat('if', 'there', 'is', 'a', 'new', 'world')

assert (result === 'ifthereisanewworld',spec)

