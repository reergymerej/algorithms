const quickSort = (a) => {
  // pick a pivot (various strategies)
  const pivot = a[a.length - 1]

  // while left < right
  let left = 0
  // TODO: handle short arrays
  let right = a.length - 2

  let x = 0
  // find left > than pivot
  while (a[left] < pivot) {
    left++
  }
  console.log(a[left], 'greater than', pivot)

  // find right < than pivot
  while (a[right] > pivot) {
    right++
  }
  console.log(a[right], 'less than', pivot)


}

module.exports = quickSort
