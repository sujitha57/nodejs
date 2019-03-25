const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log("Unable to connect mongodb server");
    }
    console.log("Connected mongodb server");

    const db = client.db('TodoApp');

// deletemany
    /*db.collection('Todos').deleteMany({Name: 'Manasa'}).then((result) => {
        console.log(result);
    });*/

    // deleteOne
    /*db.collection('Todos').deleteOne({Name: 'Sujitha'}).then((result) => {
        console.log(result);
    });*/

    
    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({Name: 'Pandu'}).then((result) => {
        console.log(result);
    });

    //client.close();
});
