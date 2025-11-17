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