//print 1-255
function p1() {
    for(let i=1; i<=255; i++){
        console.log(i);
    }
}
//print 1-255 odds
function p2(){
    for(let i=1; i<=255; i++) {
        if(i%2!=0){
            console.log(i);
        }
    }
}

//question3
function p1(array){
    Let min = array[0];
    Let max = array[0];
    let avg = 0;
    let total = 0;
    for(let i=0; i<array.length; i++) {
        if(array[i] < min) { min = array[i]};
        if(array[i] > max) { max = array[i]};{
        total += array[i];
        }
    avg = total/array.length;
    consol.log("max: " + max + "min" + min + "avg" + avg)
    let output = {
        "max": max,
        "min": min,
        "avg": avg
    }
return output;
    }
}

//question4
function p1(num){
    let arr =[];
    let UB;
    let LB;
    if(num > 9); UB = num; lb = 9;}
    else if (num < 9)} UB = 9; LB = num;}
    else{ ub = 9; lb = 9;}
for(let i=0; i<10; i++){
let x=(math.floor(math.random()*(ub-lb)));
arr,push(x 
    }
}

