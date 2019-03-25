var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

//create a model
var projects = mongoose.model('projects', {
    Name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    Technology: {
        type: String
    },
    Revenue: {
        type: Number,
        default: null
    },
    Profit:{
        type: Boolean,
        default: false
    }
});

//Create the data like model, which is created above

var projectsData = new projects({

        Name: "TCI scribe",
        Technology: "Node.js, typeScript, Angular",
        Revenue: 20000000,
        Profit: true
});

projectsData.save().then((doc) => {
    console.log('Saved anotherTodo', doc);
});