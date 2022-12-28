const person = {name: 'Jack William', age: 30, addres: 'Kochu Kata'};


const {name, addres} = person;
const age = person.age;

console.log(name);
console.log(addres);
console.log(age);


const friend = ['Salaman Khn', 'Amin Khan', 'Sharuk Khan', 'Rohid Khan', 'Silvar Khan'];

const [firstFn,...rels] = friend;

console.log(firstFn, rels);


{
    const complexObject = {
        name : 'Touhid Khan',
        info: {
            addres: 'Kola Bagan',
            Leader: 'Monkey'
        }
    }
    
    const  {name} = complexObject;
    const {Leader} = complexObject.info;
    const {...relss} = complexObject.info;
    
    console.log(name);
    console.log(Leader);
    console.log(relss);
}