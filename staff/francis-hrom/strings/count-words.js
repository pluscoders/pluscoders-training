// https://pluscoders.com/javascript/strings/challenges/count-words/
function countWords(text) {
    var matches = text.match(/\S+/g);
    return matches?matches.length:0;
}