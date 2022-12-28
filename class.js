class student{
    constructor(studenId, studentName, age){
        this.Id = studenId;
        this.StudentName = studentName;
        this.Collage = 'Gossainbari Degree Collage';
        this.Age = age;
    }
}

const student1 = new student(56, 'Himel', 14)
const student2 = new student(24, 'Kbir', 43)
const student3 = new student(64, 'Rashed', 21)

console.log(student1, student2, student3);