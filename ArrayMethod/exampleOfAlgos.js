class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function arrayToBST(arr, start, end) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let node = new Node(arr[mid]);

  node.left = arrayToBST(arr, start, mid - 1);
  node.right = arrayToBST(arr, mid + 1, end);

  return node;
}

let a1 = [13, 15, 22, 23, 26, 35, 72, 87, 88, 98, 100];
let root = arrayToBST(a1, 0, a1.length - 1);

function a(root, val) {
  if (!root) return null;
  if (root.val === val) return val;
  if (val > root.val) {
    return a(root.right, val);
  } else {
    return a(root.left, val);
  }
}

a(a1, 35);

let array = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search(array, 14)); //?























let ar = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];



// Один із таких алгоритмів - це "сортування злиттям" (Merge Sort). Ось реалізація цього алгоритму:


let a8 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    return merge(mergeSort(left), mergeSort(right));
};

const f8 = () => {
    const sortedArray = mergeSort(a8);
    document.getElementById('out-8').textContent = sortedArray.join(' ');
};