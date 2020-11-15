const employees = [];

function Employee(name, title, salary, status) {
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.status = status || "Full Time";
}

Employee.prototype.printEmployeeForm = function() {
  console.log(
    "Name: " +
      this.name +
      "\nJob title: " +
      this.title +
      "\nSalary: " +
      this.salary +
      "\nStatus: " +
      this.status
  );
};
// Instansiate three employess
let timmy = new Employee("Timmy", "The best dog ever", "millions");
let jasonBaker = new Employee(
  "Jason Baker",
  "Editor In Cheif",
  "More than you"
);
let bob = new Employee("Bob", "Wise Janitor", "?????", "Contract");

bob.status = "full time";

timmy.printEmployeeForm();
jasonBaker.printEmployeeForm();
bob.printEmployeeForm();

// Put the generated employees into the employees array using whichever method you prefer

employees.push(timmy, jasonBaker, bob);
console.log(employees);
