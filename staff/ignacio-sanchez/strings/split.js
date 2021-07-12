// split.method

function split(text, pattern) {
    {
        var msg = (text);
        var res = msg.split(pattern)
    }
    return res;
}

split("hola mundo", "o")

// 
function split(text, pattern) {
    var arr = [];
    var pos = 0;
  
    for (var i=0; i < text.length; i++) {
        if (text.substring(i,i+pattern.length) == pattern) {
            arr.push(text.substring(pos,i));
            pos = i + pattern.length;
        }
    }    
  
    arr.push(text.substring(pos,text.length));
    return arr;
  } 
  console.log(split("Hello World", "ll")); 