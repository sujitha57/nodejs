const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return Hello world as response', (done) => {
    /*request(app)
        .get('/')
        .expect(200)
        .expect('Hello world')     // Test the string
        .end(done);*/
    /*request(app)
        .get('/')
        .expect(200)
        .expect({             // Test the object
            error: "Page not found"
        })
        .end(done);*/

    // Testing with the response
    request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                error: "Page not found"
            });
        })
        .end(done);
});

describe("Employees", () => {
    it("should give employees list", (done) => {
        request(app)
            .get('/employees')
            .expect(200)
            .expect((res) => {
                //console.log(res);
                expect(res.body).toInclude('Sujitha');
            })
            .end(done);
    });
});

