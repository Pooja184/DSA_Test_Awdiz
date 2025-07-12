// . Count Even and Odd Numbers
//  Write a function that takes an array of numbers and returns how many are even and how many are odd.
//  Input 1: [2, 3, 4, 5]
//  Output 1: { even: 2, odd: 2 }
//  Input 2: [11, 14, 16, 17, 19]
//  Output 2: { even: 2, odd: 3 }

const countEvenOdd = () => {
  let arr = [2, 3, 4, 5];
  let obj = {};
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    obj["even"] = evenCount;
    obj["odd"] = oddCount;
    // if(obj[arr[i]]){
    //     obj[arr[i]]++;
    //     console.log(arr[i],"arr[i]")
    // }else{
    //     obj[arr[i]]=1
    // }
  }
  console.log(obj);
};

// countEvenOdd()

const gradeDistribution = () => {
  //  Grade Distribution
  //  Given an array of marks, return how many students scored in grade ranges: A (90+), B (80-89), C (70-79),
  // D (60-69), F (<60).
  //  Input 1: [95, 82, 67, 50]
  //  Output 1: { A: 1, B: 1, C: 0, D: 1, F: 1 }
  //  Input 2: [91, 59, 76, 88]
  //  Output 2: { A: 1, B: 1, C: 1, D: 0, F: 1 }

  let arr = [95, 82, 67, 50];
  let obj = {};
  let count = null;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    if (arr[i] >= 90) {
      count++;
    } else if (arr[i] < 89 && arr[i] >= 80) {
      // console.log("B")
      count++;
    } else if (arr[i] < 79 && arr[i] >= 70) {
      // console.log("C")
      count++;
    } else if (arr[i] < 69 && arr[i] >= 60) {
      // console.log("D")
    } else if (arr[i] < 60) {
      // console.log("F")
      count++;
    }
    obj["A"] = count;
    obj["B"] = count;
    obj["C"] = count;
    obj["D"] = count;
    obj["E"] = count;
  }
  console.log(obj);
};
// gradeDistribution();

const positiveNumbers = () => {
  // All Positive Numbers?
  //  Check if all elements in the array are greater than 0 using `every()`.
  //  Input 1: [1, 2, 3, 4]
  //  Output 1: true
  //  Input 2: [-1, 0, 5]
  //  Output 2: false

  let arr = [1, 2, 3, 4];
  let newArr = arr.every((el) => el > 0);
  console.log(newArr);
};
positiveNumbers()

const findFirstNumGreaterFifty = () => {
  //  Find First Number Greater Than 50
  //  Return the first number in the array greater than 50 using find or loop.
  //  Input 1: [10, 25, 60, 40]
  //  Output 1: 60
  //  Input 2: [45, 52, 19]
  //  Output 2: 52

  let arr = [10, 25, 60, 40];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
      console.log(arr[i]);
      break;
    }
  }
};
findFirstNumGreaterFifty();

const leapYear = () => {
  //     . Leap Year Checker
  //  Check if a year is a leap year (divisible by 4 but not 100, unless divisible by 400).
  //  Input 1: 2024
  //  Output 1: true
  //  Input 2: 2023
  //  Output 2: false

  let year = 2024;

  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

leapYear();

const doubleTheEle = () => {
  // . Double the Elements
  //  Using `map()`, return a new array where every number is multiplied by 2.
  //  Input 1: [1, 2, 3]
  //  Output 1: [2, 4, 6]
  //  Input 2: [5, 10]
  //  Output 2: [10, 20]

  let arr = [1, 2, 3];
  let newArr = arr.map((el) => el * 2);
  console.log(newArr);
};
doubleTheEle();

const filterEvenEle = () => {
  //      Filter Out Even Numbers
  //  Return a new array with only the odd numbers using `filter()`.
  //  Input 1: [1, 2, 3, 4, 5]
  //  Output 1: [1, 3, 5]
  //  Input 2: [10, 15, 20, 25]
  //  Output 2: [15, 25]

  let arr = [1, 2, 3, 4, 5];
  let newArr = arr.filter((el) => el % 2 != 0);
  console.log(newArr);
};
filterEvenEle();


const totalChar=()=>{
//      Total Character Count in Strings
//  Return the total number of characters in an array of strings using `reduce()`.
//  Input 1: ['hi', 'world']
//  Output 1: 7
//  Input 2: ['a', 'ab', 'abc']
//  Output 2: 6

let arr= ['hi','world'];
    let newArr=arr.join();
    let total=newArr.length;
    console.log(newArr)
    console.log(total)
}
totalChar();

const getLastThreeItems=()=>{
    
// . Get Last 3 Items
//  Return the last 3 items in the array using `slice()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [3, 4, 5]
//  Input 2: [10, 20, 30, 40]
//  Output 2: [20, 30, 40]

    let arr=[1, 2, 3, 4, 5];
    let newArr=arr.slice(-3);
    console.log(newArr)
}
getLastThreeItems()

const removeEleAtIndexTwo=()=>{
//     . Remove Element at Index 2
//  Use `splice()` to remove the element at index 2.
//  Input 1: [1, 2, 3, 4]
//  Output 1: [1, 2, 4]
//  Input 2: [10, 11, 12, 13]
//  Output 2: [10, 11, 13]

    let arr=[1, 2, 3, 4];
    arr.splice(2,1);
    console.log(arr);
}
removeEleAtIndexTwo()

const capitalizeFirstLetter=()=>{
//     1. Capitalize First Letter
//  Return a new array where each word starts with an uppercase letter.
//  Input 1: ['hello', 'world']
//  Output 1: ['Hello', 'World']
//  Input 2: ['code', 'test']
//  Output 2: ['Code', 'Test']

    let arr=['hello', 'world'];
    let newsArr=[];
    for(let i=0;i<arr.length;i++){
        let newstr=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        newsArr.push(newstr);
    }
    console.log(newsArr)

}

capitalizeFirstLetter()

const checkDivisibility=()=>{
//      Check Divisibility by 5
//  Use `some()` to check if at least one number in the array is divisible by 5.
//  Input 1: [3, 6, 10, 14]
//  Output 1: true
//  Input 2: [2, 4, 6]
//  Output 2: false

    let arr=[3, 6, 10, 14];
    let newArr=arr.some((el)=>el%5===0)
    console.log(newArr)
}
checkDivisibility()

const frequency=()=>{
//     Count Word Frequencies
//  Return an object where the keys are words and values are how many times each appears.
//  Input 1: ['apple', 'banana', 'apple']
//  Output 1: { apple: 2, banana: 1 }
//  Input 2: ['x', 'x', 'y']
//  Output 2: { x: 2, y: 1 }

let arr= ['apple', 'banana', 'apple'];
let obj={};

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }else{
        obj[arr[i]]=1
    }
}
console.log(obj)
}

frequency()



const flattenArr = () => {
    //     . Flatten One-Level Nested Array
//  Flatten a single-level nested array (no recursion).
//  Input 1: [1, [2, 3], 4]
//  Output 1: [1, 2, 3, 4]
//  Input 2: ['a', ['b', 'c']]
//  Output 2: ['a', 'b', 'c']

  let arr = [1, [2, 3], 4];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(typeof(arr[i]))
    if (typeof arr[i] == "object") {
      let obj = arr[i];
      // console.log(obj)
      for (let j = 0; j < obj.length; j++) {
        // console.log(obj[j])
        newArr[newArr.length] = obj[j];
      }
    } else {
      // console.log(arr[i])
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
};
flattenArr();


const removeDuplicates=()=>{
//  Return a new array without duplicate numbers.
//  Input 1: [1, 2, 2, 3]
//  Output 1: [1, 2, 3]
//  Input 2: [4, 4, 4, 5]
//  Output 2: [4, 5]
    let arr= [1, 2, 2, 3];
    let newArr=[];
    for(let i=0;i<arr.length;i++){
      let isDuplicate=false;
      for(let j=0;j<newArr.length;j++){
        if(arr[i]===newArr[j]){
          isDuplicate=true;
        }
      }
      if(isDuplicate===false){
        newArr[newArr.length]=arr[i]
      }
    }
    console.log(newArr)
}
removeDuplicates();





