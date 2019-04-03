//named function
function sayHello(name = "world", greeting){
  return `${greeting} ${name}`;
}

console.log(sayHello('Julia', 'Good Morning'));
// console.log(sayHello());

//-------------------------------------------------------------------

//Anonymous Function (needs to be saved to a variable)

var add = function(num1, num2) {
return num1 + num2;
}

console.log(add(1,2));

//-------------------------------------------------------------------

// Arrow Function (needs to be saved to a variable. To the left is parameter and the right is the function body)

var divide = (num1, num2) => {
  return num1/num2;
}

console.log(divide(1,2));

//or

// var divide = (num1, num2) => num1/num2; will also work but has to be on 1 line with 1 expression

// another short way to write a function. no '()' needed if there is only one argument

var greet = greeting => greeting + "!";
console.log(greet("hello"));


//------------------------------------------------------------------

// Functions on objects

var person = {
  age: 5,
  haveBirthday: () => {
    person.age++;
  },
  name: "Bryan"
}

console.log(person.age);
person.haveBirthday();
console.log(person.age);
console.log(person.name);
//------------------------------------------------------------------


// *****Exercises****

/* 1. Declare a function called "add"
 - this will take two arguments
 - call the first parameter firstNumber and the second secondNumber
 - use the return keyword to return the firstNumber + secondNumber
 - print the value returned from the add(2, 3) to the console
*/
//
// function add(firstNumber,secondNumber){
//   return firstNumber+secondNumber
// }
//
// console.log(add(2,2));

// =======================================================================

/* 2. Declare a function called populationDensity
 - this will take two arguments
 - call the first parameter "population" and the second "area"
 - calculate the population density (e.g. `population / area`) and return it
 - invoke the function using the population and area of Mauritius (population is 5373000 and area is 77933)
*/

// your code goes here

// function populationDensity(population,area){
//   return population/area;
// }
// console.log(populationDensity(5373000,77933));

// =======================================================================

/* 3. Declare a function called "getPasswordLength"
 - this will take one argument
 - call the parameter "pword" and default it to "1234565"
 - use the return keyword to return the length of the pword
 - print the value returned from getPasswordLength() to the console
 - print the value returned from getPasswordLength("letmein!") to the console
*/

// your code goes here
// function getPasswordLength(pword = "1234565"){
// return pword.length;
// }
//
// console.log(getPasswordLength());
// console.log(getPasswordLength("letmein!"));

// =======================================================================

/* 4. Define a function expression called getRectArea that returns the area of a rectangle
 - this will take two arguments: width, height
 - use the return keyword to return the area
 - print the value returned from getRectArea(4,5)
*/

// your code goes here
// function getRectArea(width,height){
//   return width*height;
// }
//
// console.log(getRectArea(4,5));
//
// // =======================================================================
//
// /* 5. Demonstrate that a function declaration is 'hoisted' but a function expression is not.
// TIP: Declare a function and call it above the declaration. Define a function expression and call it above the expression.
// */
//
//
// /* 6. Arrow functions can have either a "concise body" or the usual "block body".
// In a concise body, only an expression is specified, which becomes the implicit return value.
// In a block body, you must use an explicit return statement.
// */
// var func = x => x * x;
// // concise body syntax, implied "return"
//
// var func = (x, y) => { return x + y; };
// // with block body, explicit "return" needed
//
// /* TASK. Define an arrow function called "greeting" that takes one argument "name"
//  - use a concise body and implied return to return a personalised greeting
//  - for example greeting("Alexa") will return "Good morning Alexa!"
//  - print the values returned from greeting("Alexa")
// */
//
// // your code goes here
// var greeting = name => "Good Morning" + name
// console.log(greeting(" Alexa"));
//
// /* Repeat the TASK using a block body and explicit return */
// var greeting = (greet, name) => {return greet, name};
// console.log("Good Afternoon", "Doug");
