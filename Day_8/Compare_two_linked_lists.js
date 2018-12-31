function CompareLists(llist1, llist2) {
    var current1 = llist1;
    var current2 = llist2;
    if (current1 == null && current2 == null) {
        return 1;
    }
    var index1 = 0, index2 = 0, f = 0;
    while (current1 != null || current2 != null) {
        if (current1 != null && current2 != null) {
            if (current1.data == current2.data) {
                f = 1;
            } else {
                f = 0;
                break;
            }
        }
        if (current1 != null) {
            index1++;
            current1 = current1.next;
        }
        if (current2 != null) {
            index2++;
            current2 = current2.next;
        }
    }
    if (f == 1 && index1 == index2) {
        return 1;
    } else {
        return 0;
    }
}