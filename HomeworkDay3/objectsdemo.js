let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
//method 1:
console.log('EMPLOYEES');
for(let i = 0; i < users.employees.length; i++) {

}

function printUser(user, idx) {
    let name = user.last_name.toUpperCase() + ", " + user.first_name.toUpperCase();
    let lenght = user.last_name.lenght + user.first_name.lenght;
    console.log(idx+1 + " - " + name + " - " + lenght);
}
//Method 2:
for(let key in users){
 console.log(key.toUpperCase());
 users[key].forEach(printUser);

}