const validator = require("validator");

console.log(validator.isEmail("manoj@gmail.com"));
console.log(validator.isEmail("manoj@gmail"));
console.log(validator.isURL("manoj@gmail"));
console.log(validator.isURL("www.google.com"));
