function insertNodeAtHead(head, data) {
    var node = new SinglyLinkedListNode(data);
    node.next = head;
    head = node;
    return head;
}