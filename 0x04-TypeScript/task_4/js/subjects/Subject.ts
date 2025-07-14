/* task_4/js/subjects/Subject.ts */
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    // “!” = definite‑assignment so strict mode won’t complain
    teacher!: Teacher;

    /** Setter that links a Teacher instance to this subject */
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
