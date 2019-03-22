// event handler in node basic intro

const EventEmmieter = require('events');

const eventEmmiter = new EventEmmieter();

eventEmmiter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2)
});

eventEmmiter.emit('tutorial', 1, 3);


class Person extends EventEmmieter {
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let goran = new Person('Goran');
let aneta = new Person('Bubica');

aneta.on('name', () => {
      console.log("My name is " + aneta.name);
})
goran.on('name', () => {
    console.log("My name is " + goran.name);
})

goran.emit('name');
aneta.emit('name');