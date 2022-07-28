function join(array, separator) {
   var string = ''

   if (separator === undefined)
      separator = ','

   for (var i = 0; i < array.length; i++) {
      string = string + array[i]

      if (i < array.length - 1)
         string = string + separator
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