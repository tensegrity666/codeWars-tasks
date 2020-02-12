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