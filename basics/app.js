console.log("starting app.js");
var fs = require('fs');
var yargs = require('yargs');
var _ = require('lodash');
var details = require('./details.js');

const argv = yargs.command('add','add new data', {
    name: {
        describe: 'Name of a person',
        demand: true,
        alias: 'n'
    },
    id: {
        describe: 'Id of a person',
        demand: true,
        alias: 'i'
    }
})
    .command('list','list the data')
    .command('read','read the data',{
        name: {
            describe: 'Name of a person',
            demand: true,
            alias: 'n'
        }
    })
    .help()
    .argv;
var command = argv._[0];
/*console.log('Command:', command);
console.log('process:',process.argv);
console.log('Yargs:', argv);*/

if(command === 'add' ){
    var data = details.addData(argv.name, argv.id);
    if(data){
        console.log("name created");
        console.log('--');
        console.log(`Name: ${data.name}`);
    } else{
        console.log("data already taken");
    }
}else if(command === 'list'){
    console.log("list");
    var list = details.getAll();
    list.forEach((details) => {
        console.log('--');
        console.log(`Name: ${details.name}`);
        console.log(`Id: ${details.id}`);
    });
}else if(command === 'read'){
    var data = details.getName(argv.name);
    if(data){
        console.log("data found");
    } else{
      console.log("data not found");
    }
} else if(command === 'remove') {
    var removedData = details.removeName(argv.name);
    var message = removedData ? 'Removed' : 'data not found';
    console.log(message);
}
