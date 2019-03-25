var http = require('http');
var person = {
    name: "Sujitha"
};

person.age = 23;
debugger;

person.name = "Manasa";

console.log(person);

function onRequest(request, response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello world');
    response.end();
}

http.createServer(onRequest).listen(7000);