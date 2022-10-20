/* for para r pasando por los elementos del array
devolverlo al callback para que compruebe si la condicion se cumple 
si es true , return i
*/
function findIndex(array, callback) {
    for (var i = 0; i < array.length; i++)
        if (callback(array[i]))
            return i

    return -1
}