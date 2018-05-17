const selectionSort = (a) => {
  let unsortedIndex = 0

  while (unsortedIndex < a.length) {
    // find lowest in unsorted
    const lowest = Math.min.apply(this, a.slice(unsortedIndex))
    const indexOfLowest = a.indexOf(lowest)

    // swap lowest value with first item in unsorted
    a[indexOfLowest] = a[unsortedIndex]
    a[unsortedIndex] = lowest

    // move unsorted index
    unsortedIndex++
  }

  return a
}

module.exports = selectionSort
