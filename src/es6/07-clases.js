//Declarando una clase
class User {};
//Generando una Instancia de la clase User.
const newUser = new User();

//Ejemplo
class user {
    //metodos 
    greeting(){
        return 'Hello';
    }
};

const dani = new user();
console.log(dani.greeting());
const developer = new user()
console.log(developer.greeting());


//Constructor 
class persona {
    //construtor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new persona();


// this
class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


//setters and getters 
class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hola';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const diego = new user('David', 15);
console.log(diego.uAge);
console.log(diego.uAge = 20)