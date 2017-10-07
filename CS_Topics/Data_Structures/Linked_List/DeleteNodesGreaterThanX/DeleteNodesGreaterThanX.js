function removeNodes(list, x) {

    // first find the head of the list satisfying the conditions
    var head = list;
    while (head && head.val > x) {
        head = head.next;
    }

    // if no nodes satisfy the condition, return (null)
    if (!head) return

    var currentNode = head;
    var nextNode = head.next;

    while (nextNode) {
      // We want to skip over any node with a val > x
      // To do this, point the currentNode's next at the nextNode's next
      // We'll move the nextNode reference down and keep the currentNode reference in case the next nextNode's val > x too.
      // Otherwise, continue walking through the list by pointing the currentNode's and nextNode's next pointers at their own nexts

        if (nextNode.val > x) {
            nextNode = nextNode.next;
            currentNode.next = nextNode;
        } else {
            currentNode = currentNode.next;
            nextNode = nextNode.next;
        }
    }

    return head;
}
