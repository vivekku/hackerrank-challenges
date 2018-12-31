function deleteNode(head, position) {
    var current = head;
    var previous = null;
    var index = 0;
    while (index < position) {
        previous = current;
        current = current.next;
        index++;
    }
    if (index == 0) {
        head = current.next;
    } else {
        previous.next = current.next;
    }
    return head;
}