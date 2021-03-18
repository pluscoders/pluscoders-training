// https://trello.com/c/vKRdfoi4/32-feature-strings

// https://pluscoders.com/javascript/strings/challenges/spell/
function spell(text) {
  for (letter of text) {
    console.log(letter);
  }
}

// https://pluscoders.com/javascript/strings/challenges/string-to-array/
function stringToArray(text) {
  let array = [];
  for (letter of text) {
    array.push(letter);
  }  
  return array;
} 

// provide other ways to resolve the string-to-array in other versions of the script (string-to-array.x.js) may you investigate a bit ,)
// Option 1: string.split('');
function stringToArray(text) {
  return text.split('');
} 

// Option 2: [...string];
function stringToArray(text) {
  return [...text];
} 

// Option 3: Array.from(string);
function stringToArray(text) {
  return Array.from(text);
} 

// Option 4: Object.assign([], string);
function stringToArray(text) {
  return Object.assign([], text);
} 

// https://pluscoders.com/javascript/strings/challenges/concat/
function concat(...texts) {
  let str = "";
  for (text of texts) {
    str += text;
  }
  return str;
}


function concat(...strings) {
  return strings.join('');
}


// https://pluscoders.com/javascript/strings/challenges/repeat/
function repeat(text, count) {
    str = "";
    for (let i=0; i< count; i++) {
      str += text;
    };
    return str;    
}

// alternative solution
function repeat(text, count) {
    return text.repeat(count);
}

// https://pluscoders.com/javascript/strings/challenges/search/
function search(text, pattern) {
  return text.search(pattern);
}

// another solution for string only, regex would not work in this scenario
function search(text, pattern) {
  return text.indexOf(pattern);
}

// another solution for string only, regex would not work in this scenario
function search(text, pattern) {
  let pos = -1;
  for (let i=0; i < text.length-pattern.length; i++) {
    if (text.substr(i,pattern.length) == pattern) {
      pos = i;
    }
  }
  return console.log(pos);
}

// another solution for string only, regex would not work in this scenario
function search_word(text, word){ 
    let x = 0, y=0, pos = -1;   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    pos = i;
                }
            }
            y=0;
        }
    }
   return pos;
}

// https://pluscoders.com/javascript/strings/challenges/split/
function split(text, pattern) {
  return [text.substring(0,text.search(pattern)),
          text.substring(text.search(pattern)+1,text.length)];
}

// https://pluscoders.com/javascript/strings/challenges/count-words/
function countWords(text) {
    let matches = text.match(/\S+/g) ;
    return matches?matches.length:0;
}

// https://pluscoders.com/javascript/strings/challenges/longest-words/
function longestWords(text) {
  let longestWordsArray = [];

  if (text.length > 0 ) {
    let words = text.match(/\w+/g);
    let longestWordLenght = 0;

      for (let word of words) {
        if(word.length > longestWordLenght){
         longestWordLenght = word.length;
         }
      }

      for (let word of words) {
        if(word.length == longestWordLenght){
         longestWordsArray.push(word);
         }
      }
 
   }  
 return console.log(longestWordsArray);
}

/* 
On page https://pluscoders.com/javascript/strings/challenges/longest-words/
there is a "bug" in the following example:
longestWords("Hello, World!")
["Hello"]
because Hello.length === World.length, the correct results should be
["Hello","World"]
*/
