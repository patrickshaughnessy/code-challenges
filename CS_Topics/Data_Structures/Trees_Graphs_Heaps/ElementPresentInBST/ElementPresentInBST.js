this.isPresent = function(root, val) {
  if (val === root.data) {
    return 1;
  } else if (val > root.data && root.right) {
    return this.isPresent(root.right, val);
  } else if (val < root.data && root.left) {
    return this.isPresent(root.left, val);
  } else {
    return 0
  }
};

this.isPresent = function(root, val) {
  var node = root
  while(node) {
    if (node.data === val) {
      return 1
    } else {
      if(val > node.data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
  }
  return 0;
};
