class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return 'Hola';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
}

const diego = new user('David', 15);
console.log(diego.uAge);
console.log(diego.uAge = 20)