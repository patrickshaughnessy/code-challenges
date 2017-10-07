function digital_root(n) {
  if (n.toString().length === 1) {
    return n
  }
  
  return digital_root(n.toString().split('').reduce((sum, num) => {
    return sum + +num;
  }, 0))
}
