const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

const queue = [];
const results = [];
for (let i = 0; i < n; i++) {
  queue.push(a[i]);

  while (queue.length > 0 && queue[0] + k <= a[i]) {
    queue.shift();
  }
  results.push(queue.length);
}

console.log(results.join('\n'));

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step5
