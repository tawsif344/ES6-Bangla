// class parent{
//     constructor(){
//         this.Father = 'Devils Hunter';
//     }
// }



class student {
    constructor(Father1, studentId, studentName){
        // super();
        this.Father = Father1;
        this.studentID = studentId;
        this.studentName = studentName;
        this.collage = 'Gossainbari Degree Collage';
    }
    // getFullName(){
    //     return this.studentID + ' ' + this.studentName + ' ' + this.Father + ' ' + this.collage;
    // }
}
const student1 = new student('Devilds Hunter', 58, 'Rohim');
const student2 = new student('Rohid Raj', 78, 'Korim')

console.log(student1);
console.log(student2);


//Return Function//

function add(num, num1){
    if (num1 == undefined){
        num1 = 0;
        return num + num1;
    }
}
let total = add(15 * 3)

console.log(total);
