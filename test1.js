const { isLeapYear } = require('./dateUtil');

console.log("Testing individual function import:");
console.log("Leap year test (2020):", isLeapYear(2020)); // Should log true
console.log("Non-leap year test (2021):", isLeapYear(2021)); // Should log false