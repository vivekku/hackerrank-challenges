function insertNodeAtTail(head, data) {
    var node = new SinglyLinkedListNode(data);
    if (head == null) {
        head = node;
        return head;
    }
    var current = head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = node;
    return head;
}