const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

//beforeEach() hook is executes before every testcase.
//It is for deleting the database for testing.
/*beforeEach((done) =>{
    Todo.deleteOne({}).then(() => done());
});*/

describe.only('POST /todos', () => {
    it("should create a new todo", (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todo')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                Todo.find().then((docs) => {
                   // expect(docs.length).toBe(1);
                    expect(docs[0].text).toBe(text);
                    done();
                }).catch((err) => done(err));
            });
        });
    it("Should not create todo with invalid body data", (done) => {
       request(app)
           .post('/todo')
           .send({})
           .expect(400)
           .end((err, res) => {
               if(err){
                   return done(err);
               }
               Todo.find().then((docs) => {
                  // expect(docs.length).toBe(0);
                   done();
               }).catch((err) => done(err));
           });
    });
});

describe.only('GET/ user', () =>{
    it("should give user details", (done) => {
        request(app)
            .get('/user')
            .expect(200)
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                User.find().then((docs) => {
                    expect(docs[0].email).toBe("manasa123@gmail.com");
                    done();
                }).catch((err) => done(err));
            });
    });
});
