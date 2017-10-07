/*
Which are equivalent to O(n)? Why?

1) O(n + p) where p < n/2
2) O(2n)
3) O(n + logn)
4) O(n + m)


1) p < n/2 so n is dominant - drop the p
2) drop constants
3) n dominates logn so drop logn
4) no relationship between n and m so have to keep m

all but #4

*/
