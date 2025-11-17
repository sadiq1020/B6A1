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

// ------------------------

type Lengthwise = string | unknown[];

const getLength = (value: Lengthwise): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

// ------------------------

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

// ------------------------ problem 4 *** rating must be 0-5, need to solve (Link: https://www.facebook.com/photo/?fbid=1373381364169131&set=gm.1501093231202058&idorvanity=1467232634588118)

type ratedItem = {
  title: string;
  rating: number;
}

const filterByRating = (arrOfObjects: ratedItem[]): ratedItem[] => {
  const filteredGoodRated = arrOfObjects.filter(obj => obj.rating >= 4);
  return filteredGoodRated;
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

(filterByRating(books));

// ------------------------ Problem 5

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

// ------------------------ Problem 6 *** interface name has an issue

interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: IBook): string => {

  const availability = book.isAvailable ? 'Yes' : 'No';

  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

const myBook: IBook = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

// ------------------------ Problem 7

type ElementOfArray = number | string;

const getUniqueValues = (array1: ElementOfArray[], array2: ElementOfArray[]): ElementOfArray[] => {
  const result: ElementOfArray[] = [];
  const seen: { [key: string]: boolean } = {};

  const addValues = (arr: ElementOfArray[]) => {
    for (let i = 0; i < arr.length; i++) {
      const key = String(arr[i]);
      if (!seen[key]) {
        seen[key] = true;
        result[result.length] = arr[i]; // avoids push() if you want to be strict
      }
    }
  };

  addValues(array1);
  addValues(array2);

  return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

// ------------------------ Problem 8

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


console.log(calculateTotalPrice(products));
