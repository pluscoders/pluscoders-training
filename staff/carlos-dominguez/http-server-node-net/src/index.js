const net = require("net");
const server = net.createServer();
server.on("connection", (client) =>{
  client.end(`HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8

<h1>Hola, Mundo!</h1>
`);
});
server.listen(5000, ()=>{
  console.log("Servidor escuchando en 5000");
});
