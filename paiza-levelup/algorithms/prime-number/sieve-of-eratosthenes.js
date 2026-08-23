const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);

const isPrime = new Array(n + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= n; i++) {
  if (isPrime[i]) {
    for (let k = 2; k * i <= n; k++) {
      isPrime[k * i] = false;
    }
  }
}

console.log(isPrime[n] ? 'YES' : 'NO');

// https://paiza.jp/works/mondai/prime_number_primer/prime_number_primer__eratosthenes
