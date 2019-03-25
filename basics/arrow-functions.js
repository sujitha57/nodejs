//passing single parameter no need to represent in parenthesis
var square = a => a*a; // Write function with single line in ES6
console.log(square(4));

// Create an object using ES6
var user = {
    name: ' Sujitha',
    sayHi: () => {
        console.log(arguments);
        console.log("Used arrow function in an object:")
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log("Without using arrow function:")
        console.log(`Hi ${this.name}`);
    }
}
user.sayHi();
user.sayHi(1,2,'adfd');
user.sayHiAlt();
user.sayHiAlt(1, 2, 'adf');