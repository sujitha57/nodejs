const expect = require('expect');
const {assert} = require('chai');

const utils = require('./utils');

describe('Utils', () => {
    describe('Calculations', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            // Testing with expect
            expect(res).toBe(44);
            /*if(res !== 44){
                throw new Error(`Expected 44, but got ${res}`);
            }*/
        });

        it('should give the area of the square', () => {
            var res = utils.square(5);

            expect(res).toBe(25);
        });

        it('should give async and area of a square', (done) => {
            utils.asyncSquare(5, (area) => {
                expect(area).toBe(25).toBeA('number');
                done();
            });
        });

        it('should async and add two numbers', (done) => {
            utils.asyncAdd(3, 5, (sum) => {
                expect(sum).toBe(8).toBeA('number');
                done();
            });
        });
    });

//should verify first and last names are set
    it('should set firstname and lastname', () => {
        var details = {location: 'hyderabad', age: 23};
        var res = utils.setName(details, 'Sujitha chakali');

        expect(res).toInclude({
            firstname: 'Sujitha',
            lastname: 'chakali'
        });
        expect(details).toEqual(res);
    });

    it('should have some values', () => {
        //expect works as case sensitive
        expect(23).toBeLessThan(25);
        expect([1, 2, 3]).toContain(2);
        expect('Hi').toBeA('string');
        assert.typeOf('Hello world', 'string'); // Using assrtions (chai)
        expect({name: "sujitha"}).toEqual({name: "sujitha"});// in this toBe() is not accepting objects.
        expect({a: 1, b: 2,}).toContainKey('a');
        expect([1, 2, 3]).toExclude(4);
        expect({
            name: "sujitha",
            id: "33567",
            location: "Hyd"
        }).toInclude({
            name: "sujitha",
            id: "33567"
        });
    });
});
