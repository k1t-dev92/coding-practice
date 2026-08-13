const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);
const q = Number(lines[2]);

function binarySearch(a, n, k) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (a[mid] === k) {
      return mid;
    } else if (a[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const results = [];
for (let i = 0; i < q; i++) {
  const k = Number(lines[i + 3]);
  results.push(binarySearch(a, n, k) !== -1 ? 'Yes' : 'No');
}
console.log(results.join('\n'));

// https://paiza.jp/works/mondai/binary_search/binary_search__basic_step0
