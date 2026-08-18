const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ');

const stack = [];
for (let i = 0; i < n; i++) {
  if (a[i] === '+' || a[i] === '-') {
    const right = stack.pop();
    const left = stack.pop();
    stack.push(a[i] === '+' ? left + right : left - right);
  } else {
    stack.push(Number(a[i]));
  }
}

console.log(stack.pop());

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step3
