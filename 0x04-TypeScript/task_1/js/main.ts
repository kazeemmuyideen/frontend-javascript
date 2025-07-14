interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown; // Allows for additional properties with any type
}

// Example usage of the Teacher interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// ✅ New Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required property specific to Directors
}

// ✅ Create a director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher(director1.firstName, director1.lastName));

// Interface describing the class instance (methods)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass('Alice', 'Johnson');
console.log(student.displayName());     // Output: Alice
console.log(student.workOnHomework());  // Output: Currently working
