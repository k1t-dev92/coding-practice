const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);
const q = Number(lines[2]);

a.sort((x, y) => x - y);

const answers = [];
for (let i = 0; i < q; i++) {
  const [l, r] = lines[i + 3].split(' ').map(Number);
  answers.push(countInRange(a, n, l, r));
}
console.log(answers.join('\n'));

function countInRange(a, n, l, r) {
  return upperBound(a, n, r) - lowerBound(a, n, l);
}

function upperBound(a, n, r) {
  let left = 0;
  let right = n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (a[mid] <= r) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

function lowerBound(a, n, l) {
  let left = 0;
  let right = n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (a[mid] < l) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

// https://paiza.jp/works/mondai/binary_search/binary_search__basic_boss
