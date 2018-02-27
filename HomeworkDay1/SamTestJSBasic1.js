var x = [];
x.push('coding ', 'dojo ', 'rocks');
x.pop();
console.log(x);
//final value of x is "coding dojo"


const y = [];
y.push(88)
console.log(y);
//88 printed and was added to array y

var z = [9, 10, 6, 5, -1, 20, 13, 2];
z.pop();
console.log(z);

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(let i = 0; i < names.length; i++){
    if(names[i].length === 5){
        console.log(names[i]);
    }
};
