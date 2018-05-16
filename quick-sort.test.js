const quickSort = require('./quick-sort')

describe('quick-sort', () => {
  it('should order items', () => {
    const a = [3, 1, 4, 5, 2, 9, 8, 7, 0, 6]
    const result = quickSort(a)
    expect(result).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
