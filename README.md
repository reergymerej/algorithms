# algorithms

Algorithms are fun.  Why not use them instead of "Hello World" to explore new
languages.

https://medium.com/@_marcos_otero/the-real-10-algorithms-that-dominate-our-world-e95fa9f16c04


## Installation

```
git clone git@github.com:reergymerej/algorithms.git
cd algorithms
```

**JavaScript**
```
yarn
```


## Run

**JavaScript**
```
yarn test
```

---

### Merge Sort

1. Split list in half.
1. Merge sort each half.
1. Merge the halves together, shifting each list, putting the smallest in the
result.


* https://en.wikipedia.org/wiki/Merge_sort
* https://www.geeksforgeeks.org/merge-sort/
* https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm


### Quick Sort

1. Pick a pivot value.
1. Partition list so values < pivot are on left, > are on right, pivot is in
   correct location.
1. Quick sort each side of the partition.


* https://hackernoon.com/algorithms-explained-quicksort-324305b8757b
* https://en.wikipedia.org/wiki/Quicksort
* https://www.geeksforgeeks.org/quick-sort/
* http://interactivepython.org/courselib/static/pythonds/SortSearch/TheQuickSort.html
* https://www.youtube.com/watch?v=SLauY6PpjW4
* https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm


### Heap Sort

Binary Tree - tree data structure where each node has 0 - 2 children

Complete Binary Tree - every level (except possibly the last) is full, all nodes
as far left as possible

Heap - Tree data structure following "heap property" rule
  * max heap - parent node values are >= children values
  * min heap - parent node values are <= children values

Binary Heap - Heap as a complete binary tree


It is an improved "selection sort," so let's do that first.

**TODO**


* https://www.geeksforgeeks.org/heap-sort/
* http://web.cecs.pdx.edu/~sheard/course/Cs163/Doc/FullvsComplete.html
* https://en.wikipedia.org/wiki/Heap_(data_structure)
* https://www.cs.cmu.edu/~adamchik/15-121/lectures/Binary%20Heaps/heaps.html


### Selection Sort

* Divide list by sorted (0 initially), and unsorted.
* Walk through unsorted looking for lowest/highest value
* Once found, move to the end of the sorted items
* Repeat until unsorted list is empty

This is how I used to sort cards as a kid.

* https://en.wikipedia.org/wiki/Selection_sort
