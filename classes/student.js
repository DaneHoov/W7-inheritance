const Person = require('./person');

class Student extends Person {

  constructor (firstName, lastName, major, GPA) {
    super(firstName, lastName)
    this.major = major
    this.GPA = GPA
  }

  static compareGPA (student1, student2) {
    let smartestStudent;

    if(student1.GPA > student2.GPA) {
      smartestStudent = student1
    }
    else if (student2.GPA > student1.GPA) {
    smartestStudent = student2
    }
    else if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA"
    }
    return `${smartestStudent.firstName} ${smartestStudent.lastName} has the higher GPA.`
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
