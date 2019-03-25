var getUser = (id, callback)=> {
    var user = {
        Name: "sujitha",
        Id: id
    };
    setTimeout(() => {
        callback(user);
    }, 1000);
};
getUser(23, (userObject)=>{
    console.log(userObject);
});