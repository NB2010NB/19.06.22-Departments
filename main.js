//******22-25****** */

const corss = document.getElementById("course")
class cors {
    constructor(name, isTheLecturer, lisGrade, listOfStudent) {
        this.Name = name;
        this.grade = lisGrade;
        this.isLecturer = isTheLecturer;
        this.isStudnet = listOfStudent;
    }

}
const student = new cors("natan", "yes", [80, 23, 46, 87, 98, 56], ["avi", "nati", "natan", "elnatan", "dani"]);
console.log(student);
console.log(student.isStudnet.sort());
console.log(student.grade.sort((a, b) => a - b));
console.log(student.grade.sort((a, b) => b - a));

