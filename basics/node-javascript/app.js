var http= require('http');
var module1 = require('./module1');
var yargs = require('yargs');

var lodash = require('lodash');

console.log(lodash.isString('Sujitha'));

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('process:',process.argv);
console.log('Yargs:', argv);


argv.num1 = 10;
argv.num2 = 20;

if(command === 'add' ){
    console.log("adding new note");
    module1.addition(argv.num1, argv.num2);
}else if(command === 'list'){
    console.log("listing");
}else{
    console.log('not recognized');
}

var filteredArray = lodash.uniq(['Sujitha', 1, 2, 3, 'Sujitha', 1, 3]);
console.log(filteredArray);

function onRequest(request, response){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write(module1.fullname);
    module1.details();
    response.end();
}

http.createServer(onRequest).listen(8000);