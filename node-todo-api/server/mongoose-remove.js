const {objectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

Todo.deleteOne({}).then((result) => {
    console.log(result);
})

User.findByIdAndDelete("5c6a75181bbd68679429c171").then((result) => {
    console.log(result);
})