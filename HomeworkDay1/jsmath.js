function zero_negativity(x) {
    var output = true;
    for(i=0; i < x.length; i++){
        if (x[i] < 0){
            output = false;
        }
    }
    return output;
}

function is_even(z){
    if (z % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function how_many_even(y){
    var evencount = 0;
    for (i=0; i < y.length; i++){
        if (is_even(y[i])){
            evencount++;
        }
    }
    return evencount;
}

function create_dummy_array(n){
    outputArray = [];
    for (i=0; i<n; i++){
        outputArray.push(Math.round(Math.random()*9));
    }
    return outputArray;
}

function random_choice(m){
    var returnIndex = Math.round(Math.random() * m.length);
    return m[returnIndex];
}


let test1 = zero_negativity([2,3,4,-5,6,7,200]);
console.log(test1);
// => false

let test2 = zero_negativity([2,3,4,5,6,7,200]);
console.log(test2);
// => true

let test3 = is_even(10);
console.log(test3);
// => true

let test4 = is_even(9);
console.log(test4);
// => false

let test5 = how_many_even([2,3,4,5,6,7,200]);
console.log(test5);
// => 4

let test6 = create_dummy_array(4);
console.log(test6);
// => [ x1, x2, x3, x4 ] *random number 

let test7 = random_choice([2,3,4,5,6,7,200]);
console.log(test7);
// => will return random single number from array