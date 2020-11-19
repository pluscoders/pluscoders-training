
//CHALLENGE implementá la siguiente función, que te cuenta el número de palabras que tiene un texto cualquiera

function getNumWords(data){
    var esp = data.replace(/(^\s*)|(\s*$)/gi,"");
    var esp = data.replace(/[ ]{2,}/gi," ");
    var esp = data.replace(/\n /,"\n");
    return data.split(' ').length;
  
   }
   getNumWords("Hola Soy Mauri")