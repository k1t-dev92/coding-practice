const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = lines[0];

let result = '';
for (let i = n.length - 1; i >= 0; i--) {
  result = n[i] + result;
  if ((n.length - i) % 3 === 0 && i !== 0) {
    result = ',' + result;
  }
}

console.log(result);

// https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step6
