'Use strict';

function solution(str) {
  return str.split('').reverse().join('');
}


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


function isPalindrome(line) {
  line = line.toString();
  let reverse = line.split('').reverse().join('')
  console.log(reverse);
  return (line === reverse) ? true : false;
}

function isPalindrome(line) {
  return (String(line) === String(line).split('').reverse().join(''))
}

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