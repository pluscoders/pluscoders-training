//next challenge: lo mismo,  pero que no cuente los espacios

function getNumCaracteres(data){
    var esp = data.replace(/ /g,"");
    return esp.length;
   }
   getNumCaracteres("Manolo me has tenido hasta las 12 de la noche y me sale humito pero lo saque")