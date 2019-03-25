const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log("Unable to connect mongodb server");
    }
    console.log("Connected mongodb server");

    const db = client.db('TodoApp');

    //findOneAndUpdate(filter, update, options, callback)

    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c6512aa1946d434a03227fd')
    }, {
        $set: {
            text: 'Sujitha'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c6616a05220e81024b69792')
    }, {
        $set: {
            Name: 'Pandu'
        }, $inc: {
            Age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});
