static boolean hasCycle(SinglyLinkedListNode head) {
        if(head == null){
            return false;
        }
        SinglyLinkedListNode current = head;
        SinglyLinkedListNode prev = head;
        while(current != null && current.next != null){
            prev = prev.next;
            current = current.next.next;
            if(prev == current){
                return true;
            }
        }
        return false;
    }