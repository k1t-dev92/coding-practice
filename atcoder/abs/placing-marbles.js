const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const s = lines[0].split('');

let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === '1') {
    count++;
  }
}

console.log(count);
