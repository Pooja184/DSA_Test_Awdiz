const longestSubtsring = () => {
  //      Longest Substring Without Repeating Characters
  // Problem:
  // Given a string s, find the length of the longest substring without repeating characters.

  let str = "hello";
  let newStr = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (newStr.includes(str[i])) {
      break;
    } else if (!newStr.includes(str[i])) {
      newStr += str[i];
      count++;
    }
  }
  console.log(newStr);
  console.log(count);
};
// longestSubtsring();

const consecutiveArr = () => {
  //      Longest Consecutive Subsequence (Unsorted Array)
  // Problem:
  // Given an unsorted array of integers, find the length of the longest sequence of consecutive
  // numbers.
  // Note: The consecutive numbers can be in any order in the array.
  // Your solution must run in O(n) time.
  let arr = [100, 4, 200,5, 1, 3, 2];
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr);
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    // console.log(newArr[i])
    if (newArr[i + 1] - newArr[i] === 1) {
      count++;
    }else{
        break;
    }
  }

  console.log(count+1);
};
consecutiveArr();
