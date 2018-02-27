    function magic_multiply (x, y) {
        var z = 0, k =0, q = []
        if (typeof(y) == 'string') {
             return "Cannot multiply by strings."
        }

        if (typeof(x) == 'number') {   
                 z=x*y
                 return z
        } else if (typeof(x) == 'object') {
            for (k = 0; k < x.length + 1; k++) {
                q[k] = x[k]*y
                console.log(z[k])
                return q
            }
        } else if (typeof(x) == 'string') {

        } else if (typeof(x) == 'string') {
            for (k = 0; k < x; k++) {
                q[k] = x

            }

            return q
        }

}

let test1 = magic_multiply(2,5);
console.log(test1);

let test2 = magic_multiply(0,0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);

let test6 = magic_multiply(4, "Brendo");
console.log(test6);