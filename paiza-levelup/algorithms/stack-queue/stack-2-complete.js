const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const q = Number(lines[0]);
const a = [];

for (let i = 0; i < q; i++) {
  const [type, x] = lines[i + 1].split(' ');
  const t = Number(type);
  if (t === 1) {
    a.push(x);
  } else if (t === 2) {
    const last = a.pop();
    console.log(last);
  }

  console.log(a.join(' '));
}

// https://paiza.jp/works/mondai/stack_queue/stack_queue__stack_step2
