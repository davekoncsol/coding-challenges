/*-----------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
  return 'Hello!'
}


/*-----------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

Write a function called addOne that takes a single number as an argument and returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------*/
// Your solution for 01-addOne here:


function addOne(num1) {
  return num1 + 1;
};



/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic  

Prompt:

Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number')
    return num1 + num2;
  else {
    return NaN
  }
}




/*-----------------------------------------------------------------
Challenge: 03-sumNumbers

Difficulty: Basic  

Prompt:

- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).

Examples:

sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

function sumNumbers(myArray) {
  return myArray.reduce(function (a, b) {
    return a + b
  }, 0);
}






/*-----------------------------------------------------------------
Challenge: 04-addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

add(1) //=> 1
add(1,50,1.23) //=> 52.23
add(7,-12) //=> -5
-----------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList(...myArray) {
  return myArray.reduce(function (a, b) {
    return a + b
  }, 0);
}



/*-----------------------------------------------------------------
Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend and the second argument should be the divisor.
- If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

function computeRemainder(num1, num2) {
  if (num2 === 0) {
    return Infinity;
  } else return (num1 % num2);


}




/*-----------------------------------------------------------------
Challenge: 06-range

Difficulty: basic

Prompt:

- Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
- The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".

Examples:

range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------*/
// Your solution for 06-range here:

function range(a, b) {
  let arr = [];
  if (a <= b) {
    for (i = a; i < b; i++) {
      arr.push(i)
    }
    return arr;


  } else return 'First argument must be less than second'
}




/*-----------------------------------------------------------------
Challenge: 07-reverseUpcaseString

Difficulty: Basic

Prompt:

- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.

Examples:

reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString(str) {
  return str.split('').reverse().join('').toUpperCase();
}



/*-----------------------------------------------------------------
Challenge: 08-removeEnds

Difficulty: Basic

Prompt:

- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.

Examples:

removeEnds('SEI Rocks!'); //=> "DI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------*/
// Your solution for 08-removeEnds here:


function removeEnds(str) {
  return str.slice(1, -1);
}


/*-----------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be count too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------*/
// Your solution for 09-charCount here:

function charCount(str) {
  let obj = {}
  str = str.split('');
  str.forEach(a => {
    if (obj[a] >= 1) {
      obj[a] += 1
    } else
      obj[a] = 1;
  });
  return obj
}



/*-----------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

function formatWithPadding(num1, str, num2) {
  let newStr = ''
  for (i = 0; i < num2; i++) {
    newStr += str
  };
  if (num1.toString().length >= num2) {
    return num1.toString()
  } else return (newStr + num1).slice(num1.toString().length)

}




/*-----------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:


// function isPalindrome(str){
//   let arr = str.split("");
//   arr = arr.filter(function(entry) { return entry.trim() != ''; });
//   let arrRev = arr.slice(0)
//   arrRev.reverse()
//   arrRev = arrRev.join("").toLowerCase()
//   arr = arr.join("").toLowerCase()
//   if(arrRev === arr){
//     return true
//   }else return false
//   };

// Attempt 2
// function palin(str){
//   let arr = str.split(' ').join('')
//   let arr2 = arr.slice(0)
//   let arrRev = arr2.split('').reverse().join('')
//   if(arr.toLowerCase() === arrRev.toLowerCase()){
//     return true
//   } else return false
// }

//Attempt 3

function isPalindrome(str) {
  let arr = str.split(' ').join('').toLowerCase()
  let arr2 = arr.split('').reverse().join('').toLowerCase()
  return arr === arr2 ? true : false;
}


/*-----------------------------------------------------------------
Challenge: 12-hammingDistance

Difficulty: Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.

- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.

Examples:

hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:


function hammingDistance(str1, str2) {
  let count = 0
  if (str1.length === str2.length) {
    let arr = str1.split('')
    let arr2 = str2.split('')
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== arr2[i]) {
        count += 1
      }
    }
    return count
    console.log(arr, arr2)
  } else return NaN
}



/*-----------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..

Examples:

mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// Your solution for 13-mumble here:


function mumble(str) {
  let arr = str.split('')
  for (i = 0; i < arr.length; i++) {
    while (arr[i].length <= i) {
      arr[i] += arr[i][0]
    }
  }
  return arr.join('-')
}


/*-----------------------------------------------------------------
Challenge: 14-fromPairs

Difficulty: Intermediate

Prompt:

- Write a function named fromPairs that creates an object from an array containing nested arrays.
- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.

Examples:

fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------*/
// Your solution for 14-fromPairs here:

function fromPairs(arr) {
  let obj = {}
  for (i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1]
  }
  return obj
}



/*-----------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty:  Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

function mergeObjects(obj1, ...obj2) {
  obj2.forEach(obj => {
    for (let a in obj)
      obj1[a] = obj[a]
  })
  return obj1
}




/*-----------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty:  Intermediate  

Prompt:

- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array that has the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced(arrObj) {
  let highPrice = 0
  let result = {}
  arrObj.forEach(function (a) {
    if (a.price > highPrice) {
      highPrice = a.price
      result = a
    }
  })
  return result

}



/*-----------------------------------------------------------------
Challenge: 17-mapArray

Difficulty:  Intermediate

Prompt:

The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array and a callback function.
- The mapArray function should return a new array of the same length as the array argument.
- The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
//=> [2, 4, 6]  (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
} );
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------*/
// Your solution for 17-mapArray here:


function mapArray(arr, fn) {
  let newArr = []
  arr.forEach(function (a, i) {
    newArr.push(fn(a, i))
  })
  return newArr
}




/*-----------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty:  Intermediate

Prompt:

The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and 
(3) a value used as the initial value of the "accumulator".
- The reduceArray function should return whatever is returned by the callback function on the last iteration.
- The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg),
 passing to it three arguments: (1) the "accumulator", 
which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
- On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

function reduceArray(arr, fn, acc) {
  // let newArr = acc;

  for (i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i], i)
  }
  //   newArr.forEach(function (a){
  // //  result = a
  // //  }) 
  return acc
}



/*-----------------------------------------------------------------
Challenge: 19-flatten

Difficulty:  Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution for 19-flatten here:
function flatten(arr) {
  let newArr = []
  arr.forEach(function (a) {
    if (Array.isArray(a)) {
      newArr = newArr.concat(flatten(a))
    } else {
      newArr.push(a)
    }
  })
  return newArr
}




/*-----------------------------------------------------------------
Challenge: 20-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true 
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------*/
// Your solution for 20-isPrime here:
function isPrime(num) {
  let ans = 0
  for (i = 0; i <= num; i++) {
    if (num % i === 0) {
      ans += i
    }
  }
  if (ans === num + 1) {
    return true
  } else return false
}




/*-----------------------------------------------------------------
Challenge: 21-primeFactors

Difficulty: Intermediate

Prompt:

Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
- Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.

Examples:

primeFactors(2) //=> [2]
primeFactors(3) //=> [3]
primeFactors(4) //=> [2, 2]
primeFactors(18) //=> [2, 3, 3]
primeFactors(29) //=> [29]
primeFactors(105) //=> [3, 5, 7]
primeFactors(200) //=> [2, 2, 2, 5, 5]
-----------------------------------------------------------------*/
// Your solution for 21-primeFactors here:

function primeFactors(num) {
  if (num <= 1) {
    return []
  }
  let arr = [];
  let finalArr = [];
  let answer = [];
  let place = -1
  if (num > 1) {
    for (i = 0; i <= num; i++) {
      for (x = 0; x <= num; x++) {
        if (x * i === num) {
          arr.push(i);
        }
      }
    }
    arr.forEach(function (a) {
      let ans = 0;
      for (z = 0; z <= a; z++) {
        if (a % z === 0) {
          ans += z
          if (ans === a + 1) {
            finalArr.push(a);
          }
        }
      }
    })
  }

  function push() {
    while (num % finalArr[finalArr.length + place] === 0) {
      answer.push(finalArr[finalArr.length + place])
      num = (num / finalArr[finalArr.length + place])
    }
  }
  push()
  while (num % finalArr[finalArr.length + place] !== 0 && Math.abs(place) !== finalArr.length) {
    place -= 1
    push()
  }
  return answer.reverse()
}


/*-----------------------------------------------------------------
Challenge: 22-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned is not important.
- If there are no elements in the arrays in common,  the intersection function should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------*/
// Your solution for 22-intersection here:

function intersection(arr, arr2) {
  let result = []
  if (arr.length > arr2.length) {
    let temp = arr2
    arr2 = arr
    arr = temp
  }
  arr.forEach(function (a) {
    if (arr2.includes(a)) {
      result.push(a)
    }
  })
  return result
}



/*-----------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty:  Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:



// function balancedBrackets(str) {

//   let result = 0;
//   let par1 = ']'
//   let par2 = '}'
//   let par3 = ')'
//   let arr = str.split('')

//   arr.forEach(function (a, idx) {
//     if (a === '[') {
//       check(par1, idx)
//     } else if (a === '{') {
//       check(par2, idx)
//     } else if (a === '(') {
//       check(par3, idx)
//     }
//   })

//   function check(arg, idx) {
//     for (i = 0; i < arr.length; i++) {
//       if ((arg === arr[i]) && ((i - 1 - idx) === 0 || (i - 1 - idx) % 2 === 0)) {
//         result += 2
//       }
//     }
//   }
//   if ((result !== 0) && (result % 2 === 0 || result === 1)) {
//     console.log(result)
//     return true
//   } else return false
// }

// function balancedBrackets(str){

//   let result = 0;
//   let newArr=[]
//   let par1 = ']'
//   let par2 = '}'
//   let par3 = ')'
//   let arr = str.split('')

//   arr.forEach(function(a, idx){
//   if(a === '['){
//   check(par1, idx)
//   } else if (a === '{'){
//     check(par2, idx)
//   } else if (a === '('){
//     check(par3, idx)
//   }
//   }) 
//   function check(arg, idx){
//     if((arr.indexOf(arg) >=0) && ((arr.indexOf(arg) -1- idx) !== 1 )){
//    newArr.push(arr[arr.indexOf(arg)])
//    newArr.push(arr[idx])
//    console.log(idx, arr.indexOf(arg) )
//     }
//   } 
//    if(newArr.length === arr.length) {
//      console.log(arr)
//      console.log(newArr)
//      return true
//   }else return false
//   } 

function balancedBrackets(str) {

  let newArr = []
  let par1 = ']'
  let par2 = '}'
  let par3 = ')'
  let arr = str.split('')

  arr.forEach(function (a, idx) {
    if (a === '[') {
      check(par1, idx)
    } else if (a === '{') {
      check(par2, idx)
    } else if (a === '(') {
      check(par3, idx)
    }

  })

  function check(arg, idx) {
    console.log(arr.indexOf(arg))
    if ((arr.indexOf(arg) >= 0) &&
      (((arr.indexOf(arg) - 1 - idx)) !== 1) || (arr[arr.indexOf(arg) - 1] === arr[idx])) {
      newArr.push(arr[arr.indexOf(arg)])
      newArr.push(arr[idx])
    }
  }
  if (newArr.length === arr.length) {
    return true
  } else return false
}

/*-----------------------------------------------------------------
Challenge: 24-isWinningTicket

Difficulty:  Intermediate

Prompt:

- Write a function called isWinningTicket that accepts a single array an as argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.

Hints:

- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.

Examples:

isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:


function isWinningTicket(arr) {
  let count = 0
  arr.forEach(function (a) {
    for (i = 0; i <= a[0].length; i++) {
      if (a[0].charCodeAt(i) === a[1]) {
        count += 1
        break
      }
    }
  });
  if (count === arr.length) {
    return true
  } else return false
}



/*-----------------------------------------------------------------
Challenge: 25-getNumForIP

Difficulty:  Intermediate

Prompt:

- Write a function called getNumForIP that accepts a single string as argument.
- The input string is formatted as an IP address, such as '192.156.99.15'.  IP addresses are used in networking and are actually 32-bit integers.  However, those that work with networks find it more convenient to work with these numbers as four 8-bit integers, separated by a 'dot' character.
- The getNumForIP function should return the numeric value of the string IP address being passed in as an argument.

Hints:

- Each 8-bit number can hold a value between 0 and 256.
- An IP's right most 8-bit number represents how many of 256 raised to the power of 0 (equals 1) there are.  The next 8-bit number represents how many of 256 raised to the power of 1 (256) there are, etc.  For example, if you took the right-most two 8-bit numbers of the IP address 192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 * (256**1), which equals 25344.
- To compute the numeric value for an IP address, you first compute the value for each of the four 8-bit chunks (as described in the above hint), and add them together!

Examples:

getNumForIP( '0.0.0.1' ) // => 1
getNumForIP( '0.0.2.0' ) // => 512
getNumForIP( '192.156.99.15' ) // => 3231474447
getNumForIP( '10.0.0.1' ) // => 167772161
-----------------------------------------------------------------*/
// Your solution for 25-getNumForIP here:


function getNumForIP(str) {
  let arr = str.split('.')
  return arr[0] * (256 ** 3) + arr[1] * (256 ** 2) + arr[2] * (256 ** 1) + arr[3] * (256 ** 0)
}


/*-----------------------------------------------------------------
Challenge: 26-toCamelCase

Difficulty:  Intermediate

Prompt:

- Write a function called toCamelCase that accepts a single string as argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.

Hints:

- This is a great challenge for using regular expressions combined with the String.replace method.

Examples:

toCamelCase( 'wdi-rocks' ) // => 'wdiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:


function toCamelCase(str) {
  let symbols = ['-', '_']
  let arr = str.split('')
  let x = 0
  arr.forEach(function (char, idx) {
    if (symbols.includes(char)) {
      arr[idx + 1] = arr[idx + 1].toUpperCase()
      arr.splice(idx, 1)
    }
  });
  return arr.join('')
}


/*-----------------------------------------------------------------
Challenge: 27-countTheBits

Difficulty:  Intermediate

Prompt:

- Write a function called countTheBits that accepts a single numeric argument that will be an integer.
- The function should return the number of bits that are set to 1 in the number's binary representation.

Hints:

- We typically work with "decimal" numbers on a daily basis. Decimal is "base 10", where there are 10 digits available - 0 thru 9.  However, it's binary that computers understand - 1's and 0's.  The 1's and 0's are called bits.
- As an example, the decimal value of 13 is represented in binary as 1101.  There are 3 one bits and 1 zero bit in the decimal number of 13.
- Carefully read the documentation for the Number.prototype.toString method.

Examples:

countTheBits( 0 ) // => 0
countTheBits( 13 ) // => 3
countTheBits( 256 ) // => 1
countTheBits( 255 ) //=> 8
countTheBits( 65535 )  //=> 16
-----------------------------------------------------------------*/
// Your solution for 27-countTheBits here:

function countTheBits(num) {
  let count = 0
  num = num.toString(2).split('')
  num.forEach(function (a) {
    if (a === '1') {
      count += 1
    }
  });
  return count
}



/*-----------------------------------------------------------------
Challenge: 28-gridTrip

Difficulty:  Intermediate

Prompt:

- This challenge uses an imaginary grid where the x coordinate increases when you move 'up' and decreases when you move 'down'.  Similarly, the y coordinate increases when you move 'right' and decreases when you move 'left'.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers.  The first represents the starting x position on the grid.  The second integer in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to represent moving Up, Down, Right & Left respectively.  Each direction character will be followed by digits representing how many units to move in that direction.  For example, a string of 'D15R2U4' represents moving up 15 units, to the right 2 units, and finally, down 4 units.  The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position.  Do not modify the array argument).

Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction.  Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [2, 1]
gridTrip( [5, 10], 'D5L15U2' ) //-> [2, -5]
gridTrip( [-22, 100], 'L2L15D50U1D9') //=> [-80, 83]
-----------------------------------------------------------------*/
// Your solution for 28-gridTrip here:

function gridTrip(arr, str) {
  let right = str.match(/[R]\d*/gi)
  let left = str.match(/[L]\d*/gi)
  let down = str.match(/[D]\d*/gi)
  let up = str.match(/[U]\d*/gi)
  let upCount = 0
  let rightCount = 0
  let leftCount = 0
  let downCount = 0

  if (up !== null) {
    up.forEach(function (a) {
      upCount += parseInt(a.match(/\d*/gi)[1])
    })
  }
  if (down !== null) {
    down.forEach(function (a) {
      downCount -= parseInt(a.match(/\d*/gi)[1])
    })
  }
  if (left !== null) {
    left.forEach(function (a) {
      leftCount -= parseInt(a.match(/\d*/gi)[1])
    })
  }
  if (right !== null) {
    right.forEach(function (a) {
      rightCount += parseInt(a.match(/\d*/gi)[1])
    })
  }

  return [upCount + downCount + arr[0], rightCount + leftCount + arr[1]]
}



/*-----------------------------------------------------------------
Challenge: 29-addChecker

Difficulty:  Intermediate

Prompt:

- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers.  The integers in the array are sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the array of integers (first argument) that when added together, equals the integer passed in as the second argument.
- If there are no two integers in the array that sum up to equal the second argument, addChecker should return false.

Hint:

- An efficient solution can leverage the the fact that the integers in the array are sorted.

Examples:

addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
-----------------------------------------------------------------*/
// Your solution for 29-addChecker here:


function addChecker(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr.includes(num - arr[i])) {
      return true
    }
  }
  return false
}


/*-----------------------------------------------------------------
Challenge: 30-totalTaskTime

Difficulty:  Difficult

Prompt:

- Write a function called totalTaskTime that accepts two arguments.
- The first argument is an array of integers referred to as a "queue".  Each integer in the queue represents a "task", more specifically, the amount of time to complete that task.
- The second argument is an integer representing the number of CPU "threads" available to process all of the tasks in the queue.
- The totalTaskTime function should return an integer representing the total time it is going to take to complete all of the tasks in the queue.
- You may mutate the "queue" array (first argument) if you wish.

Hint:

- Solve it with paper and pencil first.  Look for patterns and generalize.  Pseudocode!

Examples:

totalTaskTime( [], 1 ) // => 0
totalTaskTime( [4, 2, 5], 1 ) // => 11
totalTaskTime( [5, 8], 2 ) // => 8
totalTaskTime( [4, 2, 10], 2 ) // => 12
totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12
-----------------------------------------------------------------*/
// Your solution for 30- here:


function totalTaskTime(arr, num) {
  let newArr = []
  let result = []
  let count = {}
  if (arr.length < 1) {
    return 0
  }
  for (i = 0; i < num; i++) {
    count[i] = 0
  }
  for (i = 0; i < num; i++) {
    newArr.push(arr[i])
  }
  let copyArr = newArr.slice()
  while (arr.length > num) {
    for (j = 0; j <= newArr.length; j++) {
      if (newArr[j] > 0) {
        newArr[j] -= 1
      }
    }
    if (newArr.indexOf(0) !== -1) {
      count[newArr.indexOf(0)] += copyArr[newArr.indexOf(0)]
      copyArr[newArr.indexOf(0)] = arr[num]
      newArr[newArr.indexOf(0)] = arr[num]
      arr.splice(num, 1)
    }
  }
  for (i = 0; i < newArr.length; i++) {
    count[i] += copyArr[i]
  }
  for (var b in count) {
    result.push(count[b])
    console.log(count[b])
  }
  for (i = 0; i < result.length; i++) {
    if (result[i] > result[i + 1]) {
      result[i + 1] = result[i]
    }
  }
  return result[result.length - 1]
}