function each(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  

  var _ = {
    _map: function(num)  {
      //code here;
    },
    reduce: function(num) { 
      // code here;
    },
    find: function(num) {   
      // code here;
    },
    filter: function(num) { 
      // code here;
    },
    reject: function(num) { 
      // code here;
    }
  }
 // you just created a library with 5 methods!
 
 var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
