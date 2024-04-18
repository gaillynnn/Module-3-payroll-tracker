// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to creat\e and return an array of employee objects
  var employeeList = []
  let continueAdd = true
  while (continueAdd) {
    var employeeFirstName = prompt("enter employee first name?")
    var employeeLastName = prompt("enter employee last name?")
    var employeeSalary = prompt("enter employee salary?")
    if (employeeFirstName.length === 0 || employeeLastName.length === 0 || isNaN(employeeSalary)) {
      alert("Please enter valid data")
    } else {
      let employee = {
        firstName: employeeFirstName,
        lastName: employeeLastName,
        salary: parseFloat(employeeSalary)
      }
      employeeList.push(employee)
    }
    continueAdd = confirm("Do you wish to add more employee data?")
  }
  console.log(employeeList)
  return employeeList
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
 // loops - while / for loop / forEach
 var totalSalary = 0 //variable
 for(let i=0;i<employeesArray.length;i++){
  totalSalary += employeesArray[i].salary
 }
 console.log("Total Salary", totalSalary)
 console.log("Average Salary", totalSalary/employeesArray.length)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  var index = Math.floor(Math.random() * employeesArray.length) //0.5 * 3 = 1
  console.log("Congratulations to our lucky draw winner",employeesArray[index].firstName+" "+employeesArray[index].lastName)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
