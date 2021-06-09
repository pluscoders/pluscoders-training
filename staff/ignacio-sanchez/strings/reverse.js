debugger
function reverse(text){
var nuevoTexto = "";
for (var i = text.length - 1; i >= 0; i--) {
nuevoTexto += text[i];
}
return nuevoTexto;
}
reverse("dog")

reverse("Hello,World")

reverse("0123456789")

for (var i = texto.length -1 ; i >= 0; i--) {
    console.log(texto[i])
}
