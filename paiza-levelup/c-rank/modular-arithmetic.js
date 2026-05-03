const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const tmp = lines[0].split(' ');
const n = Number(tmp[0]);
const a = Number(tmp[1]);

const remainder = a % n;

for (let i = 1; i <= 100000; i++) {
  if (i % n === remainder) {
    console.log(i);
  }
}
