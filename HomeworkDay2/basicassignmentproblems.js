const magicMultiply = function(x, y) {
   if (typeof y === 'string') {
       return 'Error: Cannot multiply by string.';
   } 
   if(typeof x === 'string') {
       return x.repeat(y);
   }
    if(x instanceof Array) {
       let puppies = []
       for(let i = 0; i < x.length; i++) {
        puppies.push(x[i]*y);
       }
       return puppies;
   } 
   return x * y; 
}


let test1 = magicMultiply(5, 2);
let test2 = magicMultiply(0, 0);
let test3 = magicMultiply([1, 2, 3], 2);
let test4 = magicMultiply(7, "three");
let test5 = magicMultiply("Brendo", 4);

console.log(test1, test2, test3, test4, test5);

true
false

0 // false
// any other number is true

null //false
undefined //false

{} //true
1 < 0 //flase
0 > -1 //true
