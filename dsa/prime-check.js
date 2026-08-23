const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);

let isPrime = n >= 2;
for (let i = 2; i * i <= n; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(`${n} is ${isPrime ? 'a prime number' : 'not a prime number'}`);
