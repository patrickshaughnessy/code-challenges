Hacker Rank challenge

The trick is to realize you don't need to continually iterate through the array or print the final resulting values

Tools / Skills:
* Try a different approach, write out test cases
* Find a pattern
* Is it a math problem?

In this case, stumbling upon the pattern where increasing one number in the array resulted in 1 additional move.

Backtracking, I found that the total moves is simply adding up all of the differences between the lowest number and each number in the set.
