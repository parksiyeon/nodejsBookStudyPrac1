/* A2.js */

const A = 'variable A from A2.js';
const B = require('./B2');

console.log(B + ' in A2.js');

module.exports = A;

// 자바스크립트가 순환 참조를 허용