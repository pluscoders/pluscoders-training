var arr = [1, 'one', true]

var json = JSON.stringify(arr)

json
//'[1,"one",true]'

var arrAgain = JSON.parse(json)

arrAgain
//(3) [1, 'one', true]
