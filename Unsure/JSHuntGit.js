// Link our variable "button" to a DOM element
var button = document.getElementById("nameSearch")
// add a DOM eventListener to that variable.
button.addEventListener("click", whatToDoOnClick);
// here we define the whatToDoOnClick function
function whatToDoOnClick() {
    console.log('running');
    //creates promise
    //var data = new Promise(function(resolve,reject){
      //  console.log("Inside Promise");
       var data = $.get("https://api.github.com/users/ebergemann");
   // });
    // if promise is successful (keeps me from putting all the logic in the callback)
    data.then(displayName);
    
    data.catch(function(){
      console.log('failure');
    })
    console.log('end');
  }



// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
    let outputTxt = "";
    outputTxt = "<h1>" + data["login"] + "</h1>";
    //console.log(outputTxt);

    document.querySelector("#displayName").innerHTML = outputTxt;

//console.log(data["login"]);

//  console.log(data);
//   for(key in data){
//       console.log(key + " " + data[key]);
//     }
//         let displayID = data.Login;
  //console.log("the name is" + displayID);

  }
  
