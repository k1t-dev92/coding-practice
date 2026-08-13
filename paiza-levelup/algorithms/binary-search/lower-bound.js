const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);
const q = Number(lines[2]);

a.sort((x, y) => x - y);

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

const results = [];
for (let i = 0; i < q; i++) {
  const k = Number(lines[i + 3]);
  results.push(n - lowerBound(a, n, k));
}
console.log(results.join('\n'));

// https://paiza.jp/works/mondai/binary_search/binary_search__basic_step1
