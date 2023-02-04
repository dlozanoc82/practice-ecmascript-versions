const user = {username: 'DaniCoder', age: 23, country: 'CO'}
const { username, ...values} = user;
console.log(username);
console.log(values);