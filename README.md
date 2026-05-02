# Employee Management System (JavaScript)

## Description
This project is a simple Employee Management System built using object-oriented programming (OOP) principles in JavaScript. It demonstrates the use of classes, inheritance, method overriding, and basic data management using arrays.

## Objective
The goal of this project is to model a company structure with employees and managers, and display their details in a structured format.

## Features
- Create Employee objects with name and department
- Create Manager objects that extend Employee
- Override methods using inheritance
- Store employees in a Company system
- Display all employees and managers in the console

## Classes Overview

### Employee
Base class representing a general employee.

**Properties:**
- `name`
- `department`

**Methods:**
- `describe()` – returns employee details as a string

---

### Manager (Subclass of Employee)
Extends the Employee class with additional functionality.

**Additional Property:**
- `teamSize`

**Methods:**
- `describe()` – overrides the Employee method to include team size

---

### Company
Represents a company that stores employees.

**Properties:**
- `employees` (array)

**Methods:**
- `addEmployee(employee)` – adds an employee or manager to the array
- `listEmployees()` – prints all employee details to the console

## How It Works
1. Employee and Manager objects are created.
2. A Company instance is created.
3. Employees and managers are added to the company.
4. The system loops through all entries and displays their details using polymorphism.

## How to Run
1. Copy the code into a `.js` file (e.g., `app.js`)
2. Run using Node.js: node app.js

OR open in browser console

## Concepts Demonstrated
- Classes and constructors
- Inheritance (`extends`, `super`)
- Method overriding
- Polymorphism
- Arrays and loops
- Basic console output

## Notes
- This is a console-based project (no UI)
- Designed to demonstrate OOP fundamentals in JavaScript

## Author
Kyana Hay
