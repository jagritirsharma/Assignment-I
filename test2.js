const dateUtil = require('./dateUtil');

console.log("Testing module import as a variable:");
console.log("Leap year test (2024):", dateUtil.isLeapYear(2024)); // Should log true
console.log("Non-leap year test (2023):", dateUtil.isLeapYear(2023)); // Should log false