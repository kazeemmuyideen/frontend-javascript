"use strict";
/* task_4/js/subjects/Subject.ts */
/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Subject {
        /** Assign a teacher to the subject */
        set setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
