const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const s = lines[1];

const stack = [];
let isValid = true;

for (let i = 0; i < n; i++) {
  if (s[i] === '(') {
    stack.push(s[i]);
  } else if (s[i] === ')') {
    if (stack.length === 0) {
      isValid = false;
      break;
    }
    stack.pop();
  }
}

if (stack.length !== 0) {
  isValid = false;
}

console.log(isValid ? 'Yes' : 'No');

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step4
