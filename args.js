#!/usr/bin/env node

// .map(Number): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Tricky_use_case
// ...input: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring#Assigning_the_rest_of_an_array_to_a_variable

// two methods to do the same thing; included for posterity
let [...input] = process.argv.map(Number).filter(isNumber);
// let input = process.argv.map(Number).filter(isNumber);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Filtering_invalid_entries_from_JSON
function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

let sumInputs = input.reduce((a, b) => a + b, 0);
console.log(sumInputs);
