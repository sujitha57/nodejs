console.log("details.js file");
var fs = require('fs');

var fetchData = () => {
    try{
        var dataString = fs.readFileSync('details-data.json');
        return JSON.parse(dataString);
    }catch (e) {
        return [];
    }
};

var saveData = (data) => {
    fs.writeFileSync('details-data.json', JSON.stringify(data));
}

var addData = (name, id)=> {
    var data = fetchData();
    var details = {
        name,
        id
    };
    var duplicateData = data.filter((details) => details.name === name);
   if(duplicateData.length === 0) {
       data.push(details);
        saveData(data);
        return details;
    }
};

var getAll = () => {
    return fetchData();
};

var getName = (name) => {
    var data = fetchData();
    var filteredData = data.filter((details) => details.name === name);
    return filteredData[0];
};

var removeName = (name) => {
    // fetching data
    var data = fetchData();
    // filter data, removing the one with id of argument
    var filteredData = data.filter((details) => details.name !== name);
    // save new data
    saveData(filteredData);
};

module.exports = {
    addData,
    getAll,
    getName,
    removeName
};
