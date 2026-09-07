let studentDetails = JSON.parse(localStorage.getItem("studentDetails")) || [];
const onAddClick = () => {
  let nameInp = document.querySelector("#nameInp").value;
  let phoneInp = document.querySelector("#phoneInp").value;
  let courseInp = document.querySelector("#courseInp").value;

  let obj = { nameInp, phoneInp, courseInp };
  let studentDetails = JSON.parse(localStorage.getItem("studentDetails")) || [];

  studentDetails.unshift(obj);
  localStorage.setItem("studentDetails", JSON.stringify(studentDetails));
  displayData();
};

const displayData = () => {
  let studentDetails = JSON.parse(localStorage.getItem("studentDetails")) || [];

  if (studentDetails.length > 0) {
    // to check whether atleast 1 student exists
    let result = document.querySelector("#result");

    result.innerHTML=" "
    // to clear all the stored data displayed

    studentDetails.map(
      (eachStudent) =>
        (result.innerHTML += `<h2 class="text-xl font-semibold text-gray-800 mb-4">
          Student Details
        </h2>

        <div class="space-y-2 text-gray-700">
          <p>
            <span class="font-semibold">Name:${eachStudent.nameInp}</span>
          </p>

          <p>
            <span class="font-semibold">Phone Number:${eachStudent.phoneInp}</span>
          </p>

          <p>
            <span class="font-semibold">Course:${eachStudent.courseInp}</span>
          </p>
        </div>

        <!-- Edit and Delete -->
        <div class="flex gap-3 mt-5">
          <button onclick="editBtnClick(${eachStudent.phoneInp})"
            class="bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>

          <button onclick="deleteStudent(${eachStudent.phoneInp})"
            class="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>`),
    );
  }
};
displayData();


const deleteStudent = (num) => {
  let studentDetails = JSON.parse(localStorage.getItem("studentDetails")) || [];
  let newArray = studentDetails.filter(
    (eachStudent) => eachStudent.phoneInp != num,
  );
  localStorage.setItem("studentDetails", JSON.stringify(newArray));
  displayData();
  };



const editBtnClick = (num) => {
  let studentDetails = JSON.parse(localStorage.getItem("studentDetails")) || [];
  let student = studentDetails.find(
    (eachStudent) => eachStudent.phoneInp == num,
  );
  
  console.log(student);
  document.querySelector("#nameInp").value = student.nameInp;
  document.querySelector("#phoneInp").value = student.phoneInp;
  document.querySelector("#courseInp").value = student.courseInp;

  document.querySelector("#addBtn").style.display = "none";
  document.querySelector("#editBtn").style.display = "inline";
  document.querySelector("#editBtn").style.background = "rgb(51, 73, 91)";

  deleteStudent(num);
};
