// Employee Management System 
// 
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Employee: ${this.name} | Department: ${this.department}`;
  }
}

// 
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // inherit name + department
    this.teamSize = teamSize;
  }

  // 
  describe() {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
  }
}

// 
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    // 
    if (!(employee instanceof Employee)) {
      console.warn("Only Employee or subclasses of Employee can be added.");
      return;
    }
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("=== Company Employee List ===");
    for (const employee of this.employees) {
      console.log(employee.describe());
    }
  }
}

// 
const emp1 = new Employee("Alicia James", "Accounting");
const emp2 = new Employee("Darren Singh", "IT Support");

const mgr1 = new Manager("Keisha Mohammed", "Operations", 8);
const mgr2 = new Manager("Brian Carter", "Sales", 5);

// 
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

// 
myCompany.addEmployee({ name: "Random Object", department: "???" });

myCompany.listEmployees();