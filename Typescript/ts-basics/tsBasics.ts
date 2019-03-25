var a = () => 'Sujitha';

// creating the type for typechecking
var num: number;
var bool: boolean;
var str: string;
// primitive datatypes
var ud : undefined;
var array: number[];


num = 20;
bool = true;
str = "sujitha";
array = [1, 2, 3];
array.push(4);
num = array.pop(); // because num is also a number type

var sum = (a: number, b: number, c?) => { // in ts we can pass the optional arguments with "?"
    return a+b;
};
sum(1, 3, "sujihta");
console.log(sum(1,2));

function empName() {
    return "Sujitha";
}

var employees
employees = empName();
employees = 2134;
console.log(employees);

// type "any"

var num1 : any;

num1 = 10;
num1 = "sujitha";
// type "union"

var var2 : number | boolean;
var2 = 10;
var2 = true;

