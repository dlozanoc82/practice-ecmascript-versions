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