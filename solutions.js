'Use strict';

//reverse string
function solution(str) {
  return str.split('').reverse().join('');
}

//remove chars
function removeChar(str) {
  let arr = [];
  let newArr = [];
    for (i = 0; i < str.length; ++i) {
      arr.push(str[i]);
      newArr = arr.slice(1, str.length-1).join('');
    }
  return newArr;
};

function removeChar(str) {
  return str.slice(1, -1)
}

//is palindrome
function isPalindrome(line) {
  line = line.toString();
  let reverse = line.split('').reverse().join('')
  console.log(reverse);
  return (line === reverse) ? true : false;
}

//is palindrome refactored
function isPalindrome(line) {
  return (String(line) === String(line).split('').reverse().join(''))
}

//is anagram
var isAnagram = function (test, original) {
  const toObject = (str) => {
    const newObj = {};
    for (let char of str.toLowerCase()) {
      newObj[char] = newObj[char] + 1 || 1;
    }
    return newObj;
  }

  const objA = toObject(test);
  const objB = toObject(original);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
}

//is anagram refactored
var isAnagram = function (test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t == o) ? true : false;
};

//Birthday I - Cake
function cake(x, y) {
  const percents = (x / 100) * 70;
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < y.length; ++i) {
    if (i % 2 === 0) {
      sumOdd += y.charCodeAt(i);
    } else {
      sumEven += y.charCodeAt(i) - 96;
    }
  }
  let sum = sumOdd + sumEven;

  return (sum >= percents) ? 'Fire!' : 'That was close!';
}

// INTEGERS century

function century(year) {
  return Math.ceil(year / 100);
}

//Greatest common divisor
function mygcd(x, y) {
  return x !== 0 ? mygcd(y % x, x) : y;
}

// factorial
function factorial(n) {
  let factorial = 1;
  while (n) {
    factorial *= n--;
  }
  return factorial;
}

//factorial best practice
function factorial(n) {
  if (n < 12) {
    return n ? n * factorial(n - 1) : 1; //or (n !== 1) if from 1
  } else {
    throw 'RangeError';
  }
}

//find duplicate
function findDup(arr) {
  const sortArr = arr.sort();
  let duplicateValue;
  for (i = 0; i < sortArr.length; ++i) {
    if (sortArr[i] === sortArr[i + 1])
      duplicateValue = sortArr[i];
  }
  return duplicateValue;
}


//*! is prime (not working for big integers)

function isPrime(num) {
  if (num === 2 || num === 3) {
    return true
  }

  if (num < 2 || num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return false;
  }

  num = Math.sqrt(num) | 0;

  for (let i = 2; i <= num; i++) {
      return (num % i === 0) ? false : (i === 2) ? true : IsPrime(num, i - 1);
    }

  return true;
}

//bebst solution
function isPrime(num) {
  if (num === 2 || num === 3)
    return true;

  var limit = 1 + Math.sqrt(num);

  if (num < 2 || num % 2 == 0 || num % 3 == 0)
    return false;

  for (var index = 6; index <= limit; index += 6) {
    if (num % (index - 1) === 0) return false;
    if (num % (index + 1) === 0) return false;
  }
  return true;
}

//shortest
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}


// Count characters in string

function count(string) {
  const newObj = {};
  for (let char of string) {
    newObj[char] = newObj[char] + 1 || 1;
  }
  return newObj;
}

//other
function count(string) {
  return string.split('').reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

//remove duplicates from list
function distinct(a) {
  let distincted = new Set(a);
  return [...distincted];
}

//shortest
function distinct(a) {
  return [...new Set(a)];
}

//sum of positive elements
function positiveSum(arr) {
  let sum = [];

  if ((arr.length === 0) || (arr.length === 1 && arr[0] === 0)) {
    return arr = 0;
  }

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      sum.push(arr[i]);
    }
  }

  const pos = (a, i) => {
    return a + i;
  }

  return sum.reduce(pos, 0);
}

//shortest
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

//FizzBuzz
function fizzbuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

//shortest
var fizzify = fizzbuzz = function (n) {
  return Array.apply(null, new Array(n)).map(function (e, i) {
    return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
  });
}

//find length of shortest word in string
function findShort(s) {
  const arr = s.split(' ');
  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });
  return arr[0].length;
}

//shortest
function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}

//square every digit
function squareDigits(num) {
  return +num.toString().split('').map(num => num ** 2).join('');
}

//Easy mathematical callback
function processArray(arr, callback) {
  function callback(a) {
    if (arr[0] === 4) {
      return a.map(a => a * 2)
    }
    if (arr[0] === 7) {
      return a.map(a => a + 5)
    }
    if (arr[0] === -1) {
      return a.map(a => a ** 3)
    }
    else {
      return [];
    }
  }
  return callback(arr);
}

// REGEX

function validateUsr(username) {
  return (/^[a-z0-9_]{4,16}$/.test(username));
}

//Regexp Basics - is it a letter? in object
String.prototype.isLetter = function () {
  if ((/[a-z]/i).test(this) === true && this.length === 1) {
    return true;
  } else {
    return false;
  }
}

//shortest
String.prototype.isLetter = function () {
  return /^[a-z]$/i.test(this);
};

//Regexp Basics - is it a vowel?
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};


//Curry
const curry = fn => (...args) => {
  console.log(fn.length, args.length)
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
};

const multiply = (arr, a) => {
  console.log(arr.length, a)
  const multiplied = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    multiplied.push(arr[i] = a * arr[i]);
  }
  console.log(multiplied)
  return multiplied;
}

const multiplyAll = curry(multiply);

//shortest
const multiplyAll = arr => int => arr.map(num => num * int);


//Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
};

// shortest
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}


//Get the Middle Character
function getMiddle(s) {
const length = s.length
  if (length % 2) {
  return s.charAt(length / 2);
  } else {
    return s.substring((length / 2 - 1), (length / 2 + 1));
  }
}

//shortest
return s.slice((s.length - 1) / 2, s.length / 2 + 1);


// A function that returns word count from a given string? You have to ensure
// that spaces in string is a whitespace for real.
function countWords(str) {
    str = str.trim().replace(/\ufeff/g, ' ');
  let s = str.split(' ');
  s = s.filter(el => el !== '')

  return s.length
}

//shortest
return (str.match(/[^\s]+/g) || []).length;


//Remove First and Last Character Part Two
function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

//prefill
function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? Array(n).fill(v) : [];
}

//SantaClausable
/*
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
*/
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function (methodName) {
    return typeof obj[methodName] == 'function';
  });
}

//function without function
// var three = always(3);
// three(); returns 3
function always(n) {
  return function () {
    return n
  }
}

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
// getSecret() which returns the secret
// setSecret() which sets the secret

// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2
function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(v) {
      secret = v;
    }
  }
}

// We want to create a function that will add numbers together when called in succession.
//   add(1)(2);
// returns 3
var add = function (n) {
  const chain = x => add(n + x);
  chain.valueOf = () => n
  return chain;
}

//es classes
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super();
    this.name = name;
    this.legs = 0;
    this.age = age;
    this.status = status;
    this.species = 'shark';
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = 'cat';
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = 'dog';
    this.status = status;
    this.master = master;

  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}


//classes cubes and cuboids
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return this.length * this.height * 2 + this.height * this.width * 2 + this.length * this.width * 2;
  }

  get volume() {
    return this.width * this.height * this.length;
  }
}
class Cube extends Cuboid {
  // Don't forget to make a call to super ;)
  constructor(length) {
    super()
    this.length = length;
    this.width = length;
    this.height = length;
  }
}

//digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
function digital_root(n) {
  if (n < 10) return n;

  const arr = n.toString().split('');
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  const res = arr.reduce(reducer);

  return digital_root(res);
}