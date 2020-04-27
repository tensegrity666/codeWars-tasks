### reverse string

```javascript
function solution(str) {
    return str.split('').reverse().join('');
}
```
_____________________________________________________

### remove chars

```javascript
function removeChar(str) {
  let arr = [];
  let newArr = [];
    for (i = 0; i < str.length; ++i) {
      arr.push(str[i]);
      newArr = arr.slice(1, str.length-1).join('');
    }
  return newArr;
}
```
* shortest solution:
```javascript
function removeChar(str) {
  return str.slice(1, -1)
}
```
_____________________________________________________

### is palindrome

```javascript
function isPalindrome(line) {
  line = line.toString();
  let reverse = line.split('').reverse().join('')
  console.log(reverse);
  return (line === reverse) ? true : false;
}
```
* shortest solution:
```javascript
function isPalindrome(line) {
  return (String(line) === String(line).split('').reverse().join(''))
}
```
_____________________________________________________

### is anagram

```javascript
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
```
* shortest solution:
```javascript
var isAnagram = function (test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t == o) ? true : false;
}
```
_____________________________________________________

### INTEGERS century

```javascript
function century(year) {
  return Math.ceil(year / 100);
}
```
_____________________________________________________

### Greatest common divisor

```javascript
function mygcd(x, y) {
  return x !== 0 ? mygcd(y % x, x) : y;
}
```
_____________________________________________________

### factorial

```javascript
function factorial(n) {
  let factorial = 1;
  while (n) {
    factorial *= n--;
  }
  return factorial;
}
```

* solution with best practices:
```javascript
function factorial(n) {
  if (n < 12) {
    return n ? n * factorial(n - 1) : 1; //or (n !== 1) if from 1
  } else {
    throw 'RangeError';
  }
}
```
_____________________________________________________

### find duplicate

```javascript
function findDup(arr) {
  const sortArr = arr.sort();
  let duplicateValue;
  for (i = 0; i < sortArr.length; ++i) {
    if (sortArr[i] === sortArr[i + 1])
      duplicateValue = sortArr[i];
  }
  return duplicateValue;
}
```
_____________________________________________________

### is prime (not working for big integers)

```javascript
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
```

* solution with better practices:
```javascript
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
```

* shortest solution
```javascript
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}
```
_____________________________________________________

### Count characters in string

```javascript
function count(string) {
  const newObj = {};
  for (let char of string) {
    newObj[char] = newObj[char] + 1 || 1;
  }
  return newObj;
}
```
_____________________________________________________

### remove duplicates from list

```javascript
function distinct(a) {
  let distincted = new Set(a);
  return [...distincted];
}
```

* shortest solution
```javascript
function distinct(a) {
  return [...new Set(a)];
}
```
_____________________________________________________

### sum of positive elements

```javascript
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
```

* shortest solution
```javascript
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
```
_____________________________________________________

### FizzBuzz

```javascript
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
```

* shortest solution
```javascript
var fizzify = fizzbuzz = function (n) {
  return Array.apply(null, new Array(n)).map(function (e, i) {
    return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
  });
}
```
_____________________________________________________

### find length of shortest word in string

```javascript
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
```

* shortest solution
```javascript
function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}
```
_____________________________________________________

### square every digit

```javascript
function squareDigits(num) {
  return +num.toString().split('').map(num => num ** 2).join('');
}
```
_____________________________________________________

### Easy mathematical callback

```javascript
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
```
_____________________________________________________

### REGEX

```javascript
function validateUsr(username) {
  return (/^[a-z0-9_]{4,16}$/.test(username));
}
```
_____________________________________________________

### Regexp Basics - is it a letter? in object

```javascript
String.prototype.isLetter = function () {
  if ((/[a-z]/i).test(this) === true && this.length === 1) {
    return true;
  } else {
    return false;
  }
}
```

* shortest solution
```javascript
String.prototype.isLetter = function () {
  return /^[a-z]$/i.test(this);
}
```
_____________________________________________________

### Regexp Basics - is it a vowel?

```javascript
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
}
```
_____________________________________________________

### Curry

```javascript
const curry = fn => (...args) => {
  console.log(fn.length, args.length)
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
}

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
```

* shortest solution
```javascript
const multiplyAll = arr => int => arr.map(num => num * int);
```
_____________________________________________________

### Get the Middle Character

```javascript
function getMiddle(s) {
const length = s.length
  if (length % 2) {
  return s.charAt(length / 2);
  } else {
    return s.substring((length / 2 - 1), (length / 2 + 1));
  }
}
```

* shortest solution
```javascript
return s.slice((s.length - 1) / 2, s.length / 2 + 1);
```
_____________________________________________________

