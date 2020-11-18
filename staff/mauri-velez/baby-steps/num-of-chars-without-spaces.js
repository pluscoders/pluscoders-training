//next challenge: lo mismo,  pero que no cuente los espacios

function getNumCaracteres(data){
    return data.replace(/\s/g, "");
    return data.length;
 
 }
 getNumCaracteres("Test para NO mostrar Espacios entre STRINGS")