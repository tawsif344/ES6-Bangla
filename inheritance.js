class Father{
    constructor(){
        this.FaName = 'Devels Hunter';
    }
}

class Child extends Father{
    constructor(name, age){
        super()
        this.name = name;
        this.age = age;
    }
    getFull(){
        return this.name + ' ' + this.age + ' ' + this.FaName;
    }
}

const baby = new Child('Tom Harry', 52);
const baby1 = new Child('Jasmina', 42);

console.log(baby.getFull());


