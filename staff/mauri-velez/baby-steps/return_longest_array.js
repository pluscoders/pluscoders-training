//*CHALLENGE codear una funcion que te devuelve un array con las palabras más largas de un texto cualquiera

const str = 'codear una funcion que te devuelve un array con las palabras más largas de un texto cualquiera';

const longestWordArray = (str) => {
    const strArray = str.split(' ');
    const longArray = strArray.sort(
        (a, b) => {
            return b.length - a.length;
        }
    );
    return longArray[0];
}
console.log(longestWordArray(str));