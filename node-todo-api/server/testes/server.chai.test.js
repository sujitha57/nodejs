const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

// get the text values from todo file using "chai"
chai.use(chaiHttp);

describe.only('POST/Todo', () => {
   it("should send text with chai", (done) => {
       var text = "Welcome to the chai.js";
       chai.request(app)
           .post('/todo')
           .send({text})
           .end((err, res) => {
               if(err){
                   return done(err);
               }
               //assert follows value with message.
               assert.isString(text, "Completed property in the text object is false");
               done();
           })
   })
});


describe.only('GET/Todo', () => {
    it("should return text from todo", (done) => {
        chai.request(app)
            .get('/todo')
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                Todo.find().then((docs) => {
                    expect(docs[0].text).to.equal("Test todo text");
                    done();
                });
            });

    });
});

/*
describe('DELETE/User', () => {
    it('should be delete the user data from db', (done) => {
        chai.request(app)
            .delete('/user')
            .end((err, res) => {

            })
    })
})*/
