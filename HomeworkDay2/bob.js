const bob =  {};
// Name/Key Value Pairs
bob['name'] = 'Bob';
const sarah = {
    name: 'Sarah'
};

bob.name;
// or
bob['name'];

bob['age'] = 27;
// or
bob.age = 27;
bob['height'] = 6.2;
bob['nonsensical'] = 'gleventygorp';
//or
bob['nonsensical-propery'] = 'gleventygorp';
bob.nonsencial-propery

let someKey = 'name';
bob[someKey]; 
// bob.someKey would be undefined
bob.oldEnough = false;

// 1 2          3
bob.children = [sarah, {name: 'Timmy', age: 8}];

const SarahsNameFromBob = bob.children[1].name;
console.log(timmysNameFromBob);


// Function Tutorial section
function sayHelloWorld(){
    console.log('Hello World');
};

sayHelloWorld

function addSomething (x,y){return x+y} // @26 min in audio

function sayHello(){
    console.log('hello');
    return undefined
}
sayHello ();
//parantheses are needed to call the function
var one = 1;
one;
console.log(sayHello());
//'hello' would print out
//undefined would also print out