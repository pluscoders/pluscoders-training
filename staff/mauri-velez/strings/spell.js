///Create a function that spells a text.

///Create a function that spells a text.

Implement a function named spell that receives a text (string) as a parameter and prints each character from that text to the console.//

// test viejo
// function spell(text){ 
//     for(var i = 0; i < text.length; i++) 
//     console.log(text.charAt(i)); 
// } 

// spell("mauri")


function  spell(text) {
  var caracter = text.split('');
  for (var i = 0; i < caracter.length; i++)
    console.log(caracter[i]);
}
spell("mauri")
