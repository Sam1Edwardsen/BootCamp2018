function fib1(numb){
    //....
}

function fib2(num){
    if(num === 1) return 0;
    if(num === 2) return 1;

    let val1 = 0, val2 = 1, next;
    for(let i = 2; i < num; i++){
        next = val1 + val2;
        val1 = val2;
        val2 = next;
    }
    return next;
}

function rfib(num) {
    if(num === 1) return 0;
    if(num === 2) return 1;
    return rfib(num-1) + rfib(num-2);
}

console.log(rfib(5));


