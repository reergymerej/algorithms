const quickSort = (a) => {
  if (!a.length) {
    return a
  } else if (a.length === 1) {
    return a
  }

  const pivotIndex = a.length - 1
  const pivot = a[pivotIndex]
  let index = 0
  const leftSide = []
  const rightSide = []

  while (index < pivotIndex) {
    const value = a[index]
    if (value < pivot) {
      leftSide.push(value)
    } else {
      rightSide.push(value)
    }
    index++
  }

  const sortedLeft = quickSort(leftSide)
  const sortedRight = quickSort(rightSide)
  return sortedLeft.concat(pivot, sortedRight)
}

module.exports = quickSort
