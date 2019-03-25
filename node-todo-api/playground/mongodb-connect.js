//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructuring assignment in ES6

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

    if(err){
        return console.log("unable to connect mongodb server");
    }
    console.log("connected mongodb server");

    const db = client.db('TodoApp');

    /*db.collection('Todos').insertOne({
        text: "something to do",
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/
    //insert a new document into Users (name, id, location)

    /*db.collection('Users').insertOne({
        _id: 123434,
        Name: "sujitha",
        Id: 33567,
        Location: "Hyderabad"
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(result.ops);
    });*/

    client.close();
});