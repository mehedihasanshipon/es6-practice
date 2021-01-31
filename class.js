class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Pacher high school';
    }
}

const student1 = new Student(12,'Minnatul');
const student2 = new Student(13,'Shipon');
console.log(student1.name,student1.school);