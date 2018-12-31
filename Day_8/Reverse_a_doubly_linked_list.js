function reverse(head) {
    var current = head;
    var tempNode = null;
    while (current != null) {
        tempNode = current.prev;
        current.prev = current.next;
        current.next = tempNode;
        current = current.prev;
    }
    if (tempNode != null) {
        head = tempNode.prev;
    }
    return head;
}