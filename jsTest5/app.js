const converRowsToColumns = () => {
  // Transpose of a Matrix
  // Description: Convert rows to columns and vice versa.
  // Input:
  // [
  // [1, 2],
  // [3, 4],
  // [5, 6]
  // ]

  let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  let newArr = [[], []];
  let n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    // console.log(arr[i][0])
    newArr[0].push(arr[i][0]);
  }
  for (let i = 0; i <= n; i++) {
    // console.log(arr[i][1])
    newArr[1].push(arr[i][1]);
  }
  console.log(newArr);
};
// converRowsToColumns();

const spiral = () => {
  //     3. Spiral Print of Matrix
  // Description: Print elements in spiral order.
  // Input:
  // [
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9]
  // ]

  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let newArr = [];
  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      // console.log(arr[left][i])
      newArr.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      // console.log(arr[i][right])
      newArr.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        // console.log(arr[right][i])
        newArr.push(arr[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        // console.log(arr[i][left])
        newArr.push(arr[i][left]);
      }
      left++;
    }
  }
  console.log(newArr);
};
// spiral()

const diagonalSum = () => {
  //     . Diagonal Sum of Square Matrix
  // Description: Find the sum of both main diagonals.
  // Input:
  // [
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9]
  // ]

  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let n = arr.length - 1;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    // console.log(arr[i][i]);
    sum += arr[i][i];
  }

  for (let i = 0; i <= n; i++) {
    // console.log(arr[i][n-i])
    sum += arr[i][n - i];
  }
  for (let i = 0; i <= n; i++) {
    console.log(arr[i][i]);
  }
  console.log(sum - 5);
};
// diagonalSum()

const searchInMatrix = () => {
  //      Search in 2D Matrix
  // Description: Return true if a given element exists.
  // Input: matrix + target = 5
  // [
  // [1, 2, 3],
  // [4, 5, 6]
  // ]
  // Output: true

  let arr = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  let target = 5;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        console.log(true);
        return;
      }
    }
  }
  console.log(false);
};
// searchInMatrix()

const zeroesAndOnes = () => {
  //     Count Zeros and Ones in a Matrix
  // Description: Count the number of 0s and 1s in a 2D matrix.
  // Input:
  // [
  // [1, 0, 1],
  // [1, 1, 0],
  // [0, 0, 1]
  // ]
  // Output:
  // { zero: 4, one: 5 }

  let arr = [
    [1, 0, 1],
    [1, 1, 0],
    [0, 0, 1],
  ];

  let count = { zero: 0, one: 0 };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        count.zero++;
      } else if (arr[i][j] === 1) {
        count.one++;
      }
    }
  }

  console.log(count);
};
// zeroesAndOnes();

const countNumbers = () => {
  //     . Count Elements Greater than a Threshold
  // Description: Count how many elements are greater than a given number k.
  // Input: matrix + k = 5
  // [
  // [2, 5, 7],
  // [1, 8, 3]
  // ]

  let arr = [
    [2, 5, 7],
    [1, 8, 3],
  ];

  let k = 5;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > k) {
        count++;
      }
    }
  }

  console.log(count);
};
// countNumbers();

const boundaryEle = () => {
  //     0. Boundary Elements of a Matrix
  // Description: Print all boundary (outer layer) elements of a matrix.
  // Input:
  // [
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9]
  // ]

  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let newArr = [];
  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;

  for (let i = left; i <= right; i++) {
    // console.log(arr[left][i])
    newArr.push(arr[left][i]);
  }
  top++;
  for (let i = top; i <= bottom; i++) {
    // console.log(arr[i][right])
    newArr.push(arr[i][right]);
  }
  bottom--;
  for (let i = bottom; i >= left; i--) {
    // console.log(arr[right][i])
    newArr.push(arr[right][i]);
  }

  for (let i = bottom; i >= left; i--) {
    // console.log(arr[i][left])
    newArr.push(arr[i][left]);
  }
  console.log(newArr);
};
// boundaryEle()

const maxRowSum = () => {
  //     9. Find Row with Maximum Sum
  // Description: Return the row which has the highest sum of elements.
  // Input:
  // [
  // [1, 2, 3],
  // [4, 5, 6],
  // [0, 1, 1]
  // ]

  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [0, 1, 1],
  ];

  let maxSum=0;
  for(let i=0;i<=arr.length-1;i++){
    let sum=0;
    for(let j=0;j<=arr[i].length-1;j++){
        // console.log(arr[i][j])
        sum+=arr[i][j]
    }
    // console.log(sum,"i")
    if(sum>maxSum){
        maxSum=sum;
    }
  }
  console.log(maxSum)
 
};
maxRowSum()
