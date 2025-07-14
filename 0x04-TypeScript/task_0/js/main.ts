interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create a new student object
const student1: Student = {
  firstName: "Muyideen",
  lastName: "Kazeem",
  age: 28,
  location: "Nigeria",
};

const student2: Student = {
  firstName: "Victor",
  lastName: "Ogunleye",
  age: 30,
  location: "Nigeria",
};

// store the students in an array
const studentsList: Student[] = [student1, student2];

// Create HTML table using Vanilla JS
const table = document.createElement("table");
const tablebody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr"); // a new row for each student

  const nameCell = document.createElement("td"); // a new cell for firstName
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td"); // a new cell for location
  locationCell.textContent = student.location;

  row.appendChild(nameCell); // append the firstName cell to the row
  row.appendChild(locationCell); // append the location cell to the row
  tablebody.appendChild(row); // append the row to the table body
});


table.appendChild(tablebody); // append the table body to the table
document.body.appendChild(table); // append the table to the document body