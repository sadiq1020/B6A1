const formatValue = (input: string | number | boolean): string | number | boolean => {
  if (typeof input === 'string') {
    const stringToUpperCase = input.toUpperCase();
    return stringToUpperCase;
  } else if (typeof input === 'number') {
    const numberTimesTen = input * 10;
    return numberTimesTen;
  } else {
    const booleanNegation = !input;
    return booleanNegation;
  }
};


type Length = string | unknown[];

const getLength = (value: Length): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);


type RatedItem = {
  title: string;
  rating: number;
}

const filterByRating = (arrOfObjects: RatedItem[]): RatedItem[] => {
  arrOfObjects.forEach(obj => {
    if (obj.rating < 0 || obj.rating > 5) {
      throw new Error(`Rating is invalid for "${obj.title}". Rating must be between 0 and 5.`);
    }
  });

  return arrOfObjects.filter(obj => obj.rating >= 4);
}



type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: user[]): user[] => {
  const activeUsers = users.filter(user => user.isActive);
  return activeUsers
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {

  const availability = book.isAvailable ? 'Yes' : 'No';

  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};


type ElementOfArray = number | string;

const getUniqueValues = (array1: ElementOfArray[], array2: ElementOfArray[]): ElementOfArray[] => {
  const result: ElementOfArray[] = [];
  const seen: { [key: string]: boolean } = {};

  const addValues = (arr: ElementOfArray[]) => {
    for (let i = 0; i < arr.length; i++) {
      const key = String(arr[i]);
      if (!seen[key]) {
        seen[key] = true;
        result[result.length] = arr[i];
      }
    }
  };

  addValues(array1);
  addValues(array2);

  return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {

  const totalPrice = products.reduce((subTotal, product) => {
    if (product.discount !== undefined &&
      product.discount > 0 &&
      product.discount <= 100) {
      const discountedPrice = product.price - (product.price * (product.discount / 100));
      return subTotal + discountedPrice * product.quantity;
    } else {
      return subTotal + product.price * product.quantity;
    }
  }, 0);
  return totalPrice;
}

