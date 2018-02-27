function magic_multiply(x, y){
    if((x == 0) == (y == 0)) {
    return "All inputs 0";
    } else {
    return x*y;
    }
}






let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// =>"All inputs 0"