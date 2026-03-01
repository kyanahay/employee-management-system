// Employee Management System 
// Step 2:Create a base class called Employee
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Employee: ${this.name} | Department: ${this.department}`;
  }
}

// Step 3: Create a subclass called Manager
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // inherit name + department
    this.teamSize = teamSize;
  }

  // override parent describe()
  describe() {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
  }
}


// Step 4: Create a few sample employees and managers 
const emp1 = new Employee("Alicia James", "Accounting");
const emp2 = new Employee("Darren Singh", "IT Support");

const mgr1 = new Manager("Keisha Mohammed", "Operations", 8);
const mgr2 = new Manager("Brian Carter", "Sales", 5);

// Step 5: Create a class called Company with a property employees (an array)
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("=== Company Employee List ===");
    for (const employee of this.employees) {
      console.log(employee.describe());
    }
  }
}


// Step 6: Instantiate a Company object with both employee and manager instances
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

// Call the listEmployees() method to display all employees and managers
myCompany.listEmployees();