function insertNodeAtPosition(head, data, position) {
    var newNode = new SinglyLinkedListNode(data);
    var previous = null;
    var current = head;
    var index = 0;
    while (true) {
        if (index == position) {
            var temp = current;
            previous.next = newNode;
            newNode.next = temp;
            break;
        }
        previous = current;
        current = current.next;
        index++;
    }
    return head;
}