const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log("Unable to connect mongodb server");
    }
    console.log("Connected mongodb server");

    const db = client.db('TodoApp');

    //IF WE WANT TO PASS _id WE HAVE TO USE ObjectID('UNIQUE ID') BECAUSE _ID PROPERTY IS NOT A STRING FORMAT

    /*db.collection('Todos').find({
        _id: new ObjectID('5c6512ef48f130394413d57b')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch Todos", err);
    });*/

    // COUNT THE NUMBER OF DOCUMENTS IN Todos
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos ${count}`);
    }, (err) => {
        console.log("Unable to fetch Todos", err);
    });

    client.close();
});
