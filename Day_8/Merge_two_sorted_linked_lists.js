function mergeLists(head1, head2) {
    var head = null;
    if (head1.data <= head2.data) {
        head = head1;
        head1 = head1.next;
    } else {
        head = head2;
        head2 = head2.next;
    }
    var previous = head;
    while (head1 != null && head2 != null) {
        if (head1.data <= head2.data) {
            previous.next = head1;
            previous = previous.next;
            head1 = head1.next;
        } else {
            previous.next = head2;
            previous = previous.next;
            head2 = head2.next; 
        }
    }
    if (head1 == null) {
        previous.next = head2;
    } else if (head2 == null) {
        previous.next = head1;
    }
    return head;
}