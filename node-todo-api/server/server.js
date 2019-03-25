//server.js is responsible for routes
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/user', (req, res) => {
    var user = new User({
        email: req.body.email,
        username: req.body.username
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/user', (req, res) => {
    User.find().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todo', (req, res) => {
    Todo.find().then((docs) => {
        res.send(docs);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todo/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((result) => {
        if(!result){
            return res.status(404).send();
        }

        res.send({result});
    }).catch((e) => {
        res.status(404).send();
    });
});

app.delete('/user/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    User.findByIdAndDelete(id).then((result) => {
        if(!result){
            return res.status(404).send();
        }
        res.send({result});
    }).catch((err) => {
        res.status(404).send();
    });
});

app.patch('/todo/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdUpdate(id, {$set: body}, {new: true}).then((result) => {
        if(!result){
            return res.status(404).send();
        }

        res.send({result});
    }).catch((err) => {
        res.status(400).send();
    });
});

app.listen(5000, () => {
    console.log("Started on port 5000");
    exports = function(){
        //something
    }
    var abc = 10;
    module.exports = abc;
    console.log(exports);
    console.log(module.exports);
});

module.exports = {app};