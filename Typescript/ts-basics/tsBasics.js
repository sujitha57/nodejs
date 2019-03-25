var a = function () { return 'Sujitha'; };
// creating the type for typechecking
var num;
var bool;
var str;
// primitive datatypes
var ud;
var array;
num = 20;
bool = true;
str = "sujitha";
array = [1, 2, 3];
array.push(4);
num = array.pop(); // because num is also a number type
var sum = function (a, b, c) {
    return a + b;
};
sum(1, 3, "sujihta");
console.log(sum(1, 2));
function empName() {
    return "Sujitha";
}
var employees;
employees = empName();
employees = 2134;
console.log(employees);
// type "any"
var num1;
num1 = 10;
num1 = "sujitha";
// type "union"
var var2;
var2 = 10;
var2 = true;
//# sourceMappingURL=tsBasics.js.map