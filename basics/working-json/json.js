/*var obj = {
    name: "Sujitha"
};
var stringObj = JSON.stringify(obj);//JSON method converts object into string
console.log(typeof stringObj);
console.log(stringObj);*/

/*
var personString = '{"Name": "Sujitha", "Id": "33567"}';
var person = JSON.parse(personString); // JSON method converts a string into object
console.log(typeof person);
console.log(person);*/

var fs = require('fs');

var detailsObj = {
    Name : "Manasa",
    Id : "33567"
};
var detailsObjString = JSON.stringify(detailsObj);
fs.writeFileSync('details.json', detailsObjString);

var detailsString = fs.readFileSync('details.json');
var details = JSON.parse(detailsString);
console.log(detailsObjString);
console.log(typeof details);
console.log(details);
