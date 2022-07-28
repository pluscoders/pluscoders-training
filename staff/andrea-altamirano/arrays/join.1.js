/*
hacer un for para ir pasando por los elementos del array
agregarles al final de c/u el text
generar una variable para que vaya juntando esto 

const elements = ['Fire', 'Air', 'Water'];
function join(array,'-')
for -
result = ''
result = result + array [i] + text --> result = 'Fire'
result = Fire-
result = Fire-Air-
result = Fire-Air-Water-
if i=== array.legth-1
 result = result + array[i]

*/

/*
function join(array, text) {
   var result = ''
   for (i = 0; i < array.length; i++)
      result = result + array[i] + text
   if (i === array.length - 1) {
      result = result + array[i]
   }
   return result
}
*/

/*
function join(array) {
    var string = ''

    for (var i = 0; i < array.length; i++) {
        if (i < array.length - 1)
            string = string + array[i] + ','
        else
            string = string + array[i]
    }

   return string
}
*/

/*
function join(array) {
    var string = ''

    for (var i = 0; i < array.length; i++) {
        string = string + array[i] + (i < array.length - 1? ',' : '') // ternary operator
    }

   return string
}
*/


function join(array) {
   var string = ''

   for (var i = 0; i < array.length; i++) {
       string = string + array[i]

       if (i < array.length - 1)
           string = string + ','
   }

  return string
}

// tests
const elements = ['Fire', 'Air', 'Water']

// case 1
console.log(join(elements));
// expected output: "Fire,Air,Water"

// case 2
console.log(join(elements, ''));
// expected output: "FireAirWater"

// case 3
console.log(join(elements, '-'));
// expected output: "Fire-Air-Water"