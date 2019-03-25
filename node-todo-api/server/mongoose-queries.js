const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

/*
var id = "5c6657341ee19e32684b65f1";

// find() method gives the document like [{//data}]
Todo.find({
    _id: id
}).then((result) => {
    console.log(`find method: ${result}`);
});

// findOne() method gives the object {//data}
Todo.findOne({
    _id: id
}).then((result) => {
    console.log(`findOne method: ${result}`);
});

//findById() method gives the object directly no need to match
Todo.findById(id).then((result) => {
    console.log(`findById method: ${result}`);
})*/

User.findById("5c6512aa1946d434a03227fd").then((result) => {
        if(!result){
            return console.log("unable to find user")
        }
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
    console.log(err);
});