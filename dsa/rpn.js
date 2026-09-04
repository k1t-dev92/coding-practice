const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ');

const stack = [];
for (let i = 0; i < n; i++) {
  if ('+-*/'.includes(a[i])) {
    const right = stack.pop();
    const left = stack.pop();
    if (a[i] === '+') {
      stack.push(left + right);
    } else if (a[i] === '-') {
      stack.push(left - right);
    } else if (a[i] === '*') {
      stack.push(left * right);
    } else {
      stack.push(left / right);
    }
  } else {
    stack.push(Number(a[i]));
  }
}

console.log(stack.pop());
