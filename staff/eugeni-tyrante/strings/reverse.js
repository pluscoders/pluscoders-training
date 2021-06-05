function reverse(text){
    var rev = '';
    for(var i = text.length -1; i > -1; i--){
      rev = rev + text[i]
    }
    return rev
  }
 reverse('hello world')