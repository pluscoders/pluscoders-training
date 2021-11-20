describe('forEach()')

// 1

var spec = 'should iterate on [1, 2, 3] resulting in [1, 2, 3]'

var arr = [1, 2, 3]
var elements = []
var indexes = []
var arrays = []

forEach(arr, function(element, index, array) {
    elements[elements.length] = element
    indexes[indexes.length] = index
    arrays[arrays.length] = array
})

assert(elements[0] === 1 && elements[1] === 2 && elements[2] === 3, spec)
assert(indexes[0] === 0 && indexes[1] === 1 && indexes[2] === 2, spec)
assert(arrays[0] === arr && arrays[1] === arr && arrays[2] === arr, spec)

// 2

var spec = 'should iterate on ["paper", "shirt", "ovni"] resulting in [paper, shirt, ovni]'

var arr = ["paper", "shirt","ovni"]
var res = []

forEach(arr, function(value) {
    res[res.length] = value
})

assert(res[0] === "paper" && res[1] === "shirt" && res[2] === "ovni",spec)

// 3 

var spec = 'should iterate on ["kayak", 2 , "violinist" , 4 , "trebol" , 5] resulting in [kayak,2,violinist,trebol,5]'

var arr = ["kayak", 2 , "violinist" , 4 , "trebol" , 5]
var res = []

forEach(arr, function(value){
    res[res.length] = value
 })

 assert(res[0] === "kayak" && res[1] === 2 && res[2] === "violinist" && res[3] === 4 && res[4] === "trebol" && res[5] === 5, spec)


 // 4 

 var spec = 'should iterate on ["the world", 22 , "anyway"] resulting in [the world, 22, anyway]'

 var arr = ["the world", 22 , "anyway"]
 var res = []

 forEach(arr , function(value){
     res[res.length] = value
 })

 assert(res[0] === "the world" && res[1] === 22 && res[2] === "anyway", spec)