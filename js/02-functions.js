//JS Basics Review:
function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); //1 We can call the function with a number as the argument
demoFunction("stuff"); //2 we can all the function with a string as an argument
demoFunction(1, "Stuff"); //3 We can add arguments that weren't originally declared
//Type Safety in Arguments
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works 
addNumbers(1, 2);
//2 - Errors
addNumbers(1, 2, 3);
addNumbers(1, 2, 3, "Foo");
//Javascript: 
function hello(greetingString) {
    return greetingString;
}
foo(1); //1 
//Return Types: 
//1          //2
function sayHello(name) {
    return name;
}
sayHello("Kenn"); //3 We call the function and pass in a string argument. The argument satisfies the return type. So this function works.
sayHello(1); //4 We call the function and pass in the wrong return type. The argument does not satisfy the return type, and so this would break
//Overview: 
//1                             //2
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4
/*
1. The first two parameters, numOne and numTwo are not optional.
2. The someString parameter is optional.
3. Since someString is optional, it does not require an argument when the function is called.
4. We can also call the function with an argument provided for someString.
5. If you hover over the function call you'll notice the type on someString? is a union type of string | undefined. If a value is passed in, it should be of type string. If a value is not passed in, it is of type undefined.
*/
//Optional params must go after all required params 
//# sourceMappingURL=02-functions.js.map