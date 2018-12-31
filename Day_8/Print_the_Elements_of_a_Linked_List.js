function printLinkedList(head) {
    var node = head;
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}