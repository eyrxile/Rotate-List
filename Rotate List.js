class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var rotateRight = function(head, k) {
    if(!head || k === 0) {
        return head;
    }

    let len = 1;
    let current = head;
    while(current.next) {
        current = current.next;
        len++;
    }

    k = k % len;
    if(k === 0){
        return head;
    }

    let slow = head;
    let fast = head;

    for(let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    head = slow.next;
    slow.next = null;

    return head;
};

function createLinkedList(arr){
    let dummy = new ListNode();
    let current = dummy;
    for(let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(head){
    const result = [];
    let current = head;
    while(current){
        result.push(current.val);
        current = current.next;
    }
    return result;
}

//Example usage:
const list1 = createLinkedList([1,2,3,4,5]);
const rotatedList1 = rotateRight(list1, 2);
console.log(linkedListToArray(rotatedList1));

const list2 = createLinkedList([0,1,2]);
const rotatedList2 = rotateRight(list2, 4);
console.log(linkedListToArray(rotatedList2));