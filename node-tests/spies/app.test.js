const expect= require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var database = {
        // create the spy of saveUser.
        saveUser: expect.createSpy()
    };
    //replace the db with the variable
    app.__set__('db', database);

    it("should call saveUser with user object", () => {
        var email = "ammusujji57@gmail.com";
        var password = "chintu@pandu";
        app.handleSignup(email, password);
        expect(database.saveUser).toHaveBeenCalledWith({email, password});
    });



    it("should call spy correctly", () => {
        //creation of spy
        var spy = expect.createSpy();
        /*spy();
        expect(spy).toHaveBeenCalled();*/

        //call the spy with arguments
        spy("Sujitha", 23);
        expect(spy).toHaveBeenCalledWith("Sujitha", 23);
    })

})