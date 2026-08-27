const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const a = lines[0].split(' ').map(Number);
const [l, r] = lines[1].split(' ').map(Number);

a.sort((x, y) => x - y);

function upperBound(a, n, k) {
  let left = 0;
  let right = n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (a[mid] <= k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

function lowerBound(a, n, k) {
  let left = 0;
  let right = n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (a[mid] < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

function countInRange(a, n, l, r) {
  return upperBound(a, n, r) - lowerBound(a, n, l);
}

console.log(countInRange(a, a.length, l, r));
