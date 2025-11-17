## 🎯 Interview Questions - Blog Task

1. What are some differences between interfaces and types in TypeScript?

There are some differences between interfaces and types: 

a. types can be defined for any kind of data but interfaces can not be defined any kind of data. For example if the data type is boolean, interfaces can not be used here. Interface can only be used for objects or class. 

b. For Inheritance syntax interface uses extends and type uses &

Example: 
interface Animal { 
  name: string; 
  }
interface Dog extends Animal { 
  color: string; 
  }

type Animal = { name: string; };
type Dog = Animal & { color: string; };

c. Typescript sees Two interfaces with the same name as one. But in type it is not possible. 


5. Provide an example of using union and intersection types in TypeScript.

=> Union Example: 
type NormalUser = {
  id: number;
  username: string;
  role: 'guest';
}

type AdminUser = {
  AdminId: string;
  role : 'Admin'
}

type Manager = NormalUser | AdminUser;


=> intersection Example: 

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
  name: "John",
  employeeId: 1234,
};


## ✅ Instructions & Submission Guidelines:

- **Blog:** Write a blog post on **any 2** of the provided topics and include it in this `README.md`.
- **Coding:**
  - Place all your solutions in a single TypeScript file (e.g., [solution.ts](./solution.ts)).
  - Use the exact function names provided in the problems.
  - Your function's output must **exactly** match the sample output provided. This includes punctuation, spacing, and capitalization. Any deviation will result in marks being deducted. For instance, if the sample output is `'Name: John Doe, Age: 30'`, your function must return that exact string. A return value like `'name: John Doe, age: 30'` or `'Name: John Doe,Age: 30'` will be considered incorrect.
  - Use meaningful names for all variables, functions, and classes.
  - Do not include comments like “Problem 1” in your code.
  - Do not include any `console.log` in your final code.
- **Originality:** All work must be original. Plagiarism will result in a **zero**.
- **Submission:** Submit a single public GitHub repository which will includes your [solution.ts](./solution.ts) file and the updated `README.md`.

## 🕒 Assignment Deadlines:

- **60 Marks:** November 18, 2025 – _before 11:59 PM_
- **50 Marks:** November 19, 2025 – _before 11:59 PM_
- **30 Marks:** After November 19, 2025

---
