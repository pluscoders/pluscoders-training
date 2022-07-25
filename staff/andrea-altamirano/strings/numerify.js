function numerify(text) {
  var finalText = text;

  for (var lp = 0; lp < text.length; lp++) {
    var l = text[lp];

    if (l == "a") {
    }
  }
}
return;

///another way
function numerify(text) {
  let resultA = text.replace("a", "4");
  let resultE = resultA.replace("e", "3");
  let resultI = resultE.replace("i", "1");
  let resultO = resultI.replace("o", "0");

  return resultO;
}

// tests

console.log(numerify("hola mundo"));
// h0l4 mund0

console.log(numerify("murcielago"));
// murc13l4g0

console.log(numerify("i love coding"));
// 1 l0v3 c0d1ng
