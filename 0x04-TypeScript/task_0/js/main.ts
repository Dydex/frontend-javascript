// Define the student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const stuOne: Student = {
  firstName: 'cench',
  lastName: 'Cee',
  age: 25,
  location: 'texas',
};

const stuTwo: Student = {
  firstName: 'Dave',
  lastName: 'Satan',
  age: 25,
  location: 'newyork',
};

// Creating Array
const studentsList: Student[] = [stuOne, stuTwo];

const table = document.createElement('table');
const headerRow = document.createElement('tr');

// Table headers
const th1 = document.createElement('th');
th1.textContent = 'First Name';
const th2 = document.createElement('th');
th2.textContent = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

// Add rows for rach student
studentsList.forEach(function (student) {
  const row = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.textContent = student.firstName;

  const td2 = document.createElement('td');
  td2.textContent = student.location;

  row.appendChild(td1);
  row.appendChild(td2);
  table.appendChild(row);
});

document.body.appendChild(table);
