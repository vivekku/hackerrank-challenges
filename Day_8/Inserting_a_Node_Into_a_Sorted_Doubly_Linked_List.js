function sortedInsert(head, data) {
    var node = new DoublyLinkedListNode(data);
    if (head == null) {
        head = node;
    } else if (head.data >= node.data) {
        node.next = head;
        node.next.prev = node;
        head = node;
    } else {
        var current = head;
        while (current.next != null && current.next.data < node.data) {
            current = current.next;
        }
        node.next = current.next;
        if (current.next != null) {
            node.next.prev = node;
        }
        current.next = node;
        node.prev = current;
    }
    return head;
}