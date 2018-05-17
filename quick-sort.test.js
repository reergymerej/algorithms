const quickSort = require('./quick-sort')

describe('quick-sort', () => {
  it('should work with an empty list', () => {
    const a = []
    const result = quickSort(a)
    expect(result).toEqual([])
  })

  it('should work a list of one', () => {
    const a = [1]
    const result = quickSort(a)
    expect(result).toEqual([1])
  })

  it('should work a list of two', () => {
    const a = [2, 1]
    const result = quickSort(a)
    expect(result).toEqual([1, 2])
  })

  it('should work a list of three', () => {
    const a = [3, 2, 1]
    const result = quickSort(a)
    expect(result).toEqual([1, 2, 3])
  })

  it('should work with bigger lists', () => {
    const a = [3, 1, 4, 5, 2, 9, 8, 7, 0, 6]
    const result = quickSort(a)
    expect(result).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
