const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.send("Hello world"); // Send a string as response
    res.send({   // send response as object
        error: "Page not found",
        name: "Hello world"
    });
});

app.get('/employees', (req, res) => {
    res.send(['Sujitha', 'Manasa', 'Chintu', 'Pandu']);
});

app.listen(5000);

module.exports.app = app;