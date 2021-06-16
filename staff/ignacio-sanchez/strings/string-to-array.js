//For loop 

function stringToArray(text) {
    let arr = []; 
    for (let i of text){
     arr.push(i); 
    }
    console.log(arr)
  }
  stringToArray('Hello World')
      


  function stringToArray(text){
    var arr = [];
    for (i = 0 ; i < text.length; i++){
        arr[i] = text[i]
    }
    return arr
    }
    stringToArray("Hello World")