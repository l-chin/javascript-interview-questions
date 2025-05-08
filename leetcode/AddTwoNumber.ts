/**
 * 2. Add Two Numbers
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
**/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
} 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Create a dummy head node to simplify the process
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Continue while we have digits to process or a carry
    while (l1 || l2 || carry) {
        // Get values from current nodes (or 0 if node is null)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Calculate sum and new carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        // Create new node with the digit value
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to next nodes if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Return the result list (skip the dummy head)
    return dummyHead.next;
}