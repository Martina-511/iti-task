const students = [
  { fname: 'ali', age: 22, grade: 100 },
  { fname: 'nora', age: 20, grade: 90 },
  { fname: 'nada', age: 25, grade: 75 },
  { fname: 'heba', age: 19, grade: 50 },
  { fname: 'bassem', age: 21, grade: 40 }
];

const select = document.getElementById("studentSelect");
const studentDetails = document.getElementById("studentDetails");
const styledList = document.getElementById("styledList");

students.forEach((student, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = `ID ${index}`;
  select.appendChild(option);
});

select.addEventListener("change", function () {
  const index = this.value;
  if (index === "") {
    studentDetails.innerHTML = "";
    return;
  }

  const student = students[index];
  studentDetails.innerHTML = `
    <strong>Name:</strong> ${student.fname}<br>
    <strong>Age:</strong> ${student.age}<br>
    <strong>Grade:</strong> ${student.grade}
  `;
});

students.forEach((student, index) => {
  const div = document.createElement("div");
  div.className = index % 2 === 0 ? "even" : "odd";
  div.innerHTML = `
    <strong>Name:</strong> ${student.fname}<br>
    <strong>Age:</strong> ${student.age}<br>
    <strong>Grade:</strong> ${student.grade}
  `;
  styledList.appendChild(div);
});
