const { performance } = require('perf_hooks');
const search = require('./binarySearch.js');

const ARRAY_LENGTH = 1e6;

const sortedArray = Array.from({length: ARRAY_LENGTH}, (_,i) => i + 1);

const firstNumber = randomNumber(0, ARRAY_LENGTH);
const secondNumber = randomNumber(0, ARRAY_LENGTH);
const thirdNumber = randomNumber(0, ARRAY_LENGTH);

// Linear search
printRunningTime(
  'Linear search',
  () => {
    linearSearch(sortedArray, firstNumber);
    linearSearch(sortedArray, secondNumber);
    linearSearch(sortedArray, thirdNumber);
  }
);

// Binary search
printRunningTime(
  'Binary search',
  () => {
    search.binarySearch(sortedArray, firstNumber);
    search.binarySearch(sortedArray, secondNumber);
    search.binarySearch(sortedArray, thirdNumber);
  }
);


/**
 * Print function running time
 * @param {string} title
 * @param {Function} callback
 *
 * @returns {void}
 */
function printRunningTime(title, callback) {
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`${title} - running time: ${end - start}`);
}

/**
 * Linear search
 *
 * @param {Array<number>} array
 * @param {number} element
 * @returns {number}
 */
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
}

/**
 * Generate random number
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}