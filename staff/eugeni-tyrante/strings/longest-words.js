function longestWords(text) {
    var words = text.split(' ');
    var maxLength = 0;
    var word = '';
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i]


    }

    words.forEach(function(str) {
      if(str.length > maxLength) {
        maxLength = str.length;
        word = str;
      }
    });
    return word;
  }
  
  console.log(longestWords('Hi there ! How are you today ?'));

  //Si vale pero no consigo llegar yo solo.