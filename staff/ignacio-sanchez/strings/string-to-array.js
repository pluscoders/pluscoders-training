//For loop 

  function stringToArray(text){
    var arr = [];
    for (var i = 0 ; i < text.length; i++){
        arr[i] = text[i]
    }
    return arr
    }
    stringToArray("Hello World")