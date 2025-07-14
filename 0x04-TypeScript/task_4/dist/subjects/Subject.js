"use strict";
/* task_4/js/subjects/Subject.ts */
/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Subject {
        /** Setter that links a Teacher instance to this subject */
        set setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
