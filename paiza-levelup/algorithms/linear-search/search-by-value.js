const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const numbers = lines[1].split(' ').map(Number);
const k = Number(lines[2]);

for (let i = 0; i < n; i++) {
  if (numbers[i] === k) {
    console.log(i + 1);
  }
}

// https://paiza.jp/works/mondai/sequence_search_problems/sequence_search_problems_search_value_boss
