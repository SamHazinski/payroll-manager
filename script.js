// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // starts the loop to collect data
  let inputMore = true;
  //creates an array of employee objects
  let employees = [];
  //loops through the adding employee objects to the array until the user clicks cancel
  while (inputMore){
  let first =  window.prompt("Enter employee first name");
  let last =  window.prompt("Enter employee last name");
  let sal = window.prompt("Enter employee salary");
  //creates an employee object
  let employee = {
   firstName: first,
   lastName: last,
   salary: sal
}
//adds employee object to the employees array
employees.push(employee);
//checks to see if the user wants to continue adding 
inputMore = window.confirm("add another?");
  }
  //returns an array of employee objects
return employees
//  console.log (employees);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //creates a total var
  let total = 0;
  //adds every salary for every employee
  for (let i = 0; i < employeesArray.length; i++){
    total += Number(employeesArray[i].salary);
  }
  //returns the total salary divided by the number of employees
  return console.log(total / employeesArray.length);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let ranEmployee = Math.floor(Math.random() * employeesArray.length);
  return console.log('Congratulations to ' 
  + employeesArray[ranEmployee].firstName 
  + ' ' + employeesArray[ranEmployee].lastName 
  + ', our random drawing winner!');
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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
