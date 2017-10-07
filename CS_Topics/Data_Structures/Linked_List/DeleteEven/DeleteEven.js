/*
 * Complete the function below.
 */
/*
For your reference:
LinkedListNode {
    var val;
    var next;
};
*/
function deleteEven(list) {
  var head = list;

  while (head && head.val % 2 === 0) {
    head = head.next;
  }

  if (!head) return

  var currentNode = head;
  var nextNode = head.next;
  while(nextNode){
    if (nextNode.val % 2 === 0){
      currentNode.next = nextNode.next;
    } else {
      currentNode = nextNode;
    }

    nextNode = currentNode.next
  }

  return head;
}
