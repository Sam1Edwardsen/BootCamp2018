/* Instructions on Variables
var myName = 'Kadie';
var myAge = 29;
var myBirthday;
console.log('Hello World!');
// => Hello World!
console.log(myName);
// => Kadie
console.log(myAge);
// => 29
console.log(myBirthday);
// => undefined
*/
------------------------------------------------
/* Instructions on Variables 2
var x = [1, 2, 3];
var y = x;
x.push('Hello world!')
//push adds to the end of arrays in JavaScript
console.log(x);
console.log(y);
*/
------------------------------------------------
/* Math Functions
let x = Math.floor(Math.random() * 20);
console.log(x);
// => logs random number between 0 and 19
let y = Math.floor(Math.random() * 21);
console.log(y);
// => logs a random number between 0 and 20
let z = Math.floor(Math.random() * 20) + 1;
console.log(z);
// => logs a random number between 1 and 20
*/
------------------------------------------------
/* Modulus is the percent sign and returns the remainder after divison 
let x = 11;
let y = 5;
let z = x % y;
console.log(z);
// => 1
let x = 16;
console.log(x % 2);
// when we modulus by 2, even numbers will return 0
let y = 17;
console.log(y % 2);
// while odd numbers will return a value that isn't 0!
*/
------------------------------------------------
/* Basic String Information
let x = "Hello world";
let y = 'Hello World';
// Single or double quotes represent the boundaries of our string
let firstName = "Oscar";
let lastName = "Vazquez";
let message = "Hello, my name is " + firstName + " " + lastName;
console.log(message);
ES6 String Interpolation Information
let firstName = "Oscar";
let lastName = "Vazquez";
let message = `Hello, my name is ${firstName} ${lastName}`;
// Take note of the backticks instead of quotes
console.log(message);
*/
------------------------------------------------
/* Conditionals Intro and Information
if(hunger === true){
    eat_cake();
};
if(hunger === true){
    // this is our conditional statement, we are checking if 
    // the value of the variable hunger is equal to true.
        eat_cake();
        // this is the body of our conditional statement, which will 
        // only ever run if the above statement evaluates as true
    };
let diet = false;
    if(diet){
        dont_eat_cake();
    }else{
        eat_cake();
    }
let score = 4;
    if(score === 5){
        console.log('You got 5 out of 5');
    }else if(score === 4){
        console.log('You got 4 out of 5');
    }else if(score === 3){
        console.log('You got 3 out of 5');
    }else if(score === 2){
        console.log('You got 2 out of 5');
    }else if(score === 1){
        console.log('You got 1 out of 5');
    };
Complex Conditional Statement 
let cake = true;
let hunger = true;
let birthday = "May 13th";
if(cake){
// first we check if there is a cake, which is true
    if(hunger === true && birthday === "May 13th"){
    // then we check if both hunger is true and if 
    // birthday is set to a matching string.
        eat_cake();
        // all conditions are met, so we eat cake!
    }else{
        dont_eat_cake();
        // while the cake exists (or else we wouldn't be 
        // executing this line) we were either not hungry or 
        // it was not our birthday, so we won't eat cake :(
    }
}
// if there is no cake, then none of the above statements will 
// even evaluate. This is because 'if(cake)' equalled to false!
*/
------------------------------------------------
/* Arrays Information
let x = [1, 2, 3];
let y = ['blue', 'yellow', 'magical unicorns'];
let z = [1, [], null, 'hello world!'];
Length property checks how many elements an array has 
let z = [1, [], null, 'hello world!'];
console.log(z.length);
// => 4
*/
------------------------------------------------
/* Loop Information 
for(let i = 0; i < 7; i++){
    console.log('hello');
};
*/
------------------------------------------------
/* Functions Examples and Information
// -- standalone function ---
function sayName1(name){
    console.log("Hello my name is " + name);
};
// -- anonymous function, stored in a variable --
let sayName2 = function(name){
    console.log("Hello my name is " + name);
};
// -- standalone function, stored in a variable --
let sayName3 = function sayName3(name){
    console.log("Hello my name is " + name);
};
*/
