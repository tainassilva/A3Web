var express = require ('express');// receber e fazer o parse
var http = require('http');

var app = express ();
var server = http.createServer(app);

// Se digitamos no navegador localhost:3333, faremos uma requisição GET
app.get('/',function(req,res){
	//Servidor manda a resposta da requisição de volta para o cliente
	res.send("<h1>Você se conectou com sucesso</h1>");
});
// Esperando na porta 3333
server.listen(3333,function(){
	console.log("Server listen on port : 3333")
});


