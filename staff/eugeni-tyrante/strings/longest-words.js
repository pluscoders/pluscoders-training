function longestWord(string) {
    let str = string.split(" ");
    let countWords = 0;
    let word = "";
    str.forEach(function(str) {
      if(str.length > countWords) {
        countWords = str.length;
        word = str;
      }
    });
    return word;
  }
  
  console.log(longestWord("Hi there ! How are you today ?"));

  //Si vale pero no consigo llegar yo solo.