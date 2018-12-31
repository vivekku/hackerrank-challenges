function getNode(head, positionFromTail) {
    var index = 0;
    var current = head;
    while (head != null) {
        head = head.next;
        if (index++ > positionFromTail) {
            current = current.next;
        }
    }
    return current.data;
}