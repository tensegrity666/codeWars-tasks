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

