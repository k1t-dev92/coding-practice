const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);

const stack = [];
for (let i = 0; i < n; i++) {
  stack.push(a[i]);

  while (
    stack.length >= 2 &&
    stack[stack.length - 1] === stack[stack.length - 2]
  ) {
    const doubled = stack.pop() * 2;
    stack.pop();
    stack.push(doubled);
  }
}

console.log(stack.reverse().join('\n'));

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step6
