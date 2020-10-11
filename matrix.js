/*
Find the length of the largest region in a boolean matrix (island problem)
Consider a matrix with rows and columns, where each cell contains either a ‘0’ or a ‘1’ 
and any cell containing a 1 is called a filled cell.
 Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. 
 If one or more filled cells are also connected, they form a region. find the length of the largest region.



[
[0,0,0,0,0],
[0,0,0,0,1],
[0,0,0,0,0]
]

iterate through the matrix 
(also a recursive solution)


sub algorithm
if we hit a 1, check all the values around and if they are 1s, add the indices to the queue
    after adding all indices, move to the next item in the queue and remove, not the array
    only add items that are unique
    increment the counter and repeat (no dupes in the queue)
when queue is empty push counter in regions, reset counter, move to next spot in original matrix

count = 5
    only update the count when you move
queue = [ ]
 longest region = 8

 regions = []
    return Max value of regions
*/
