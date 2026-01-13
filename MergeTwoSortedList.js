/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }
     // Attached remaining values
    current.next = list1 !== null ? list1 : list2;
    return dummy.next;
};



// Explanation:
// Compare list1.val and list2.val
// Attach the smaller node to the new list
// Move that list forward
// Repeat until one list is finished
// Attach the remaining nodes
// Return dummy.next (the real merged list)