/**
 * Spells a text.
 *
 * @param text {string} - The text to spell.
 *
 * @returns {string} - The text prints each character.
 * 
 * @throws {TypeError} - If the text parameter is not string.
 */
function spell(text) {
  if (typeof text !== 'string') throw new TypeError(text + ' is not a string')
  
  for (var i = 0; i < text.length; i++) {
    console.log(text[i])
  }

}
