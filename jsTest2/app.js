const reverseArr = () => {
  // Reverse an array
  // Reverse the elements of an array manually (without using .reverse()).
  // Input 1: [1, 2, 3]
  // Output 1: [3, 2, 1]
  // Input 2: [10, 20, 30]
  // Output 2: [30, 20, 10]
  let arr = [1, 2, 3];
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
};
reverseArr(); //1

const secLargest = () => {
  // Find second largest number in an array
  // Return the second largest unique number from an array.
  // Input 1: [10, 5, 20, 8]
  // Output 1: 10
  // Input 2: [1, 2, 2, 3]
  // Output 2: 2

  let arr = [10, 5, 20, 8];
  let max = 0;
  secMax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }
  }
  console.log(secMax);
};
secLargest(); //2

const removeDuplicates = () => {
  // Remove duplicates from array
  // Return a new array with all duplicates removed (no Set).
  // Input 1: [1, 2, 2, 3]
  // Output 1: [1, 2, 3]
  // Input 2: [5, 5, 5, 1]
  // Output 2: [5, 1]

  let arr = [1, 2, 2, 3];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
removeDuplicates(); //3

const arrEqual = () => {
  // Check if two arrays are equal
  // Compare if two arrays have same elements in same order.
  // Input 1: [1, 2, 3], [1, 2, 3]
  // Output 1: true
  // Input 2: [1, 2], [2, 1]
  // Output 2: false

  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3];
  let sameEl = true;
  for (let i = 0; i < arr1.length; i++) {
    sameEl = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // console.log(arr1[i], arr2[j], "in");
        sameEl = true;
        break;
      }
    }
  }
  if (sameEl === true) {
    console.log(true);
  } else {
    console.log(false);
  }
};
arrEqual()//4

const vowels = () => {
  // 6. Count vowels in a string
  // Count number of vowels (a, e, i, o, u) in a given string.
  // Input 1: "hello"
  // Output 1: 2
  // Input 2: "JAVASCRIPT"
  // Output 2: 3

  let str = "JAVASCRIPT";
  let found=0;
  for (let i = 0; i < str.length; i++) {
    if(str[i]=="a" ||str[i]=="e" ||str[i]=="i" ||str[i]=="o" ||str[i]=="u"|| str[i]=="A" ||str[i]=="E" ||str[i]=="I" ||str[i]=="O" ||str[i]=="U"){
        found++;
    }
  }
  console.log(found);
};
vowels();//6

const trianglePattern=()=>{
// Print triangle pattern using loops
// Write a loop to print * pattern based on number of rows.
// Input 1: 3
// Output 1: *\n* *\n* * *
// Input 2: 2
// Output 2: *\n* *

    let range=3;
    for(let i=0;i<=range;i++){
        let row=""
        for(let j=1;j<=i;j++){
            row+="* "
        }
        console.log(row)
    }
}
trianglePattern()//7

const facotorial=(n)=>{
// Factorial using recursion
// Calculate factorial of a number using recursion.
// Input 1: 5
// Output 1: 120
// Input 2: 3
// Output 2: 6

   
    if(n==1) return 1;
    return n*facotorial(n-1);

}
console.log(facotorial(5))//8

const prime=()=>{
// Return true if number is prime (only divisible by 1 and itself).
// Input 1: 7
// Output 1: true
// Input 2: 9
// Output 2: false
    let num=7;
    let isPrime=true;
    for(let i=2;i<num;i++){
        isPrime=true;
        if(num%i===0){
            console.log(i)
            isPrime=false;  
            break; 
        }  
    }
     if(isPrime===true){
            console.log(true)
        }else{
            console.log(false)
        }
}
prime()//9

const frequency=()=>{
// Count frequency of array elements
// Return an object with count of each element in array.
// Input 1: [1, 2, 2, 3]
// Output 1: {1:1, 2:2, 3:1}
// Input 2: [4, 4, 4]
// Output 2: {4:3}

    let arr=[1, 2, 2, 3];
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    console.log(obj);
}
frequency()//11

const palindrome=()=>{
// Check if string is palindrome
// Return true if string reads same forward and backward.
// Input 1: "madam"
// Output 1: true
// Input 2: "hello"
// Output 2: false

    let str="madam";
    let i=0;
    let j=str.length-1;
    let isPalindrome=false;
    while(i<j){
        if(str[i]===str[j]){
            isPalindrome=true;
        }else{
            isPalindrome=false;
            break;
        }
        i++;
        j--;
    }
    if (isPalindrome) {
        console.log(true)
    }else{
        console.log(false)
    }
}
palindrome()

const reverseStr=()=>{
//  Reverse a string manually
// Reverse a string without using .reverse().
// Input 1: "hello"
// Output 1: "olleh"
// Input 2: "JS"
// Output 2: "SJ"

    let str="hello";
    let str1=""
    for(let i=str.length-1;i>=0;i--){
        str1+=str[i]
    }
    console.log(str1)
}
reverseStr()

const flattenArr=()=>{
// Flatten nested array
// Convert a nested array into a single flat array.
// Input 1: [1, [2, [3]], 4]
// Output 1: [1, 2, 3, 4]
// Input 2: [[1], [2, 3]]
// Output 2: [1, 2, 3]

    let arr=[1, [2, [3]], 4];
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])==="object"){
            let innerArr=arr[i];
            for(let j=0;j<innerArr.length;j++){
                newArr[newArr.length]=innerArr[j]
            }
        }else{
            newArr[newArr.length]=arr[i]
        }
    }
    console.log(newArr)
}
flattenArr()

const invertObj=()=>{
// Invert object (key value)
// Swap keys and values in an object.
// Input 1: {a:1, b:2}
// Output 1: {1:'a', 2:'b'}
// Input 2: {x:'y', z:'w'}
// Output 2: {'y':'x', 'w':'z'}
    let obj = {a: 1, b: 2};
    let invertedObj = {};
    for (let key in obj) {
        invertedObj[obj[key]] = key;
    }
    console.log(invertedObj);

}
invertObj();

const mergeObj=()=>{
//     . Merge two objects
// Combine two objects into one.
// Input 1: {a:1}, {b:2}
// Output 1: {a:1, b:2}
// Input 2: {x:10}, {x:20, y:30}
// Output 2: {x:20, y:30}
    let obj1 = {a: 1};
    let obj2 = {b: 2};
    let mergedObj = {...obj1, ...obj2};
    console.log(mergedObj);
}
mergeObj();

const highestValue=()=>{
// Find key with highest value in object
// Return the key which has the highest numeric value.
// Input 1: {a: 1, b: 5, c: 3}
// Output 1: "b"
// Input 2: {x: 100, y: 99}
// Output 2: "x"
    let obj={a: 1, b: 5, c: 3};
    let max=0;
    for(let key in obj){
        if(obj[key]>max){
            max=obj[key]
        }
        // console.log(obj[key])
    }
    console.log(max)
}
highestValue()




