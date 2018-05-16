const merge = (a, b) => {
  const c = []
  // Compare each item.  Add the lesser to the new array.
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      c.push(a.shift())
    } else {
      c.push(b.shift())
    }
  }

  // If either list is exhausted, append the remaining to the new array.
  // Each list was already sorted, so we know that the items are greater than
  // those already added from the component list.  How do we know that those in
  // a are less than the remainder of b?  Do we?
  while (a.length) {
    c.push(a.shift())
  }

  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (a) => {
  // divide list
  const mid = Math.floor(a.length / 2)

  if (mid) {
    const left = a.slice(0, mid)
    const right = a.slice(mid)

    // mergeSort sides
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    // merge
    return merge(sortedLeft, sortedRight)
  } else {
    return a
  }
}

module.exports = mergeSort
