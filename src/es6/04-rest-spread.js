// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object Destructuring
let user = {
    username: 'Daniel',
    age: 22
}
let {username, age} = user;
console.log(username, user.age);

//Spread Operator
let person = {
    name: 'Daniel', 
    age: 22
}

let country = 'COL';
let data = {id: 1, ...person, country}
console.log(data);

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4)