function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Camilo', 'Daniel', 'Diego', 'Carlos', 'Karen']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);