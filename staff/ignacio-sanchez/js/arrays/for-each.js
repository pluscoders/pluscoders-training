/**
 * TODO
 * 
 * @param {*} arr 
 * @param {*} callback 
 */
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i]

        callback(element)
    }
}