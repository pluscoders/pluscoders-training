// https://pluscoders.com/javascript/strings/challenges/longest-words/
function longestWords(text) {
  var longestWordsArray = [];

  if (text != "" ) {
    var words = text.match(/\w+/g);
    var longestWordLenght = 0;

      for (var i=0; i < words.length; i++) {
        if(words[i].length > longestWordLenght){
         longestWordLenght = words[i].length;
         }
      }

      for (var j=0; j < words.length; j++) {
        if(words[j].length  == longestWordLenght){
         longestWordsArray.push(words[j]);
         }
      }
 
   }  

 return longestWordsArray;
}
  