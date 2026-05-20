const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const year = Number(lines[0]);

const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log(isLeap ? 'Leap Year' : 'Common Year');
