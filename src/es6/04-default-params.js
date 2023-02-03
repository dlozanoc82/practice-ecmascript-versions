function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Daniel', 22, 'COL');

function newAdmin(name='Oscar', age = 32, country='MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Daniel', 26, 'COL');