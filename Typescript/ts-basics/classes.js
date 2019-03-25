var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// In ts can declare the types to the member variables.
var Person = /** @class */ (function () {
    // it is automatically invoked when instance of the class is created
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    ;
    return Person;
}());
// instance of  a Person
/*var emp = new Person(); // emp implicitly declares the type as Person.
emp.firstName = "Sujitha";
emp.lastName = "Chakali";*/
// instance of a person after creation of constructor.
var emp = new Person("Sujitha", "Chakali");
console.log(emp.getFullName());
// ts supports INHERITANCE
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.greet = function () {
        console.log("Hey there");
    };
    return student;
}());
var st = /** @class */ (function (_super) {
    __extends(st, _super);
    function st() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overriding the method greet
    st.prototype.greet = function () {
        console.log("hello world");
    };
    st.prototype.greetLikeNormalPerson = function () {
        this.greet(); // It returns "hello world" because it refers to the st not for the student class.
        _super.prototype.greet.call(this); // It returns "Het there" because super keyword referring the parent class of the st.
    };
    return st;
}(student));
var st1 = new st();
// It refers to the extended class from parent class
st1.greet();
st1.greetLikeNormalPerson();
//# sourceMappingURL=classes.js.map