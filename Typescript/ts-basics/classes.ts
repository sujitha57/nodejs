// In ts can declare the types to the member variables.
class Person {
    firstName : string;
    lastName : string;
    // it is automatically invoked when instance of the class is created
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName+ " " + this.lastName;
    };
}

// instance of  a Person
/*var emp = new Person(); // emp implicitly declares the type as Person.
emp.firstName = "Sujitha";
emp.lastName = "Chakali";*/

// instance of a person after creation of constructor.
var emp = new Person("Sujitha", "Chakali");
console.log(emp.getFullName());

// ts supports INHERITANCE

class student {
    firstName : string;
    Id: number;
    greet(){
        console.log("Hey there");
    }
}

class st extends student{
    // overriding the method greet
    greet(){
        console.log("hello world");
    }

    greetLikeNormalPerson() {
        this.greet(); // It returns "hello world" because it refers to the st not for the student class.
        super.greet(); // It returns "Het there" because super keyword referring the parent class of the st.
    }
}

var st1 = new st();
// It refers to the extended class from parent class
st1.greet();
st1.greetLikeNormalPerson();

