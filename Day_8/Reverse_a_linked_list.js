function reverse(head) {
    var tempNode = new SinglyLinkedListNode();
    var previous = null;
    var current = head;
    tempNode = current.next;
    current.next = null;
    while (tempNode != null) {
        previous = current;
        current = tempNode;
        tempNode = current.next;
        current.next = previous;
    }
    head = current;
    return head;
}