const student = [
    {id: 21, name: 'Ommor Sanny'},
    {id: 32, name: 'Manna Deay'},
    {id: 52, name: 'Salikb Khan'},
    {id: 65, name: 'Saruk Khan'}
]

const names = student.map(s => s.name);
const ides = student.map(s => s.id);
const down = student.filter(s => s.id>40)
const down2 = student.find(s => s.id>40)

console.log(names);
console.log(ides);
console.log(down2);