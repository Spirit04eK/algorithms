module.exports = {

  /**
   * Sorts array in ascending order
   * @param {Array<number>} array
   * @returns {Array}
   */
  sort(array) {
    return array.slice(0, array.length).sort((a, b) => a -b);
  },

  /**
   * Binary search in array
   *
   * @param {Array<number>} arr - sorted array
   * @param {number} element
   * @returns {number}
   */
  binarySearch(arr, element) {
    let left = -1;
    let right = arr.length;
    while (right - left > 1) {
      const middle = Math.floor((left + right) / 2);

      if (arr[middle] === element) {
        return middle;
      }

      if (arr[middle] > element) {
        right = middle;
        continue;
      }

      left = middle;
    }
  },

  /**
   * Count frequency element in array
   * @param {Array<number>} array - sorted array
   * @param {number} element
   */
  countFrequency(array, element) {
    const positionElement = this.binarySearch(array, element);

    if (positionElement < 0) {
      return 0;
    }

    let i = positionElement;
    while (array[i] === element) {
      i--;
    }

    let j = positionElement;
    while (array[j] === element) {
      j++;
    }

    return j - i - 1;
  }
};