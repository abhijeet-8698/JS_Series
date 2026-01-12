var deleteDuplicates = function(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;   // here we skip duplicate values
        } else {
            current = current.next;             // move forward to next value
        }
    }
    return head;  
};