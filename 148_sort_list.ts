// https://leetcode.com/problems/sort-list/

import { createListNode, ListNode, linkedListNodePrinter } from './data_structures/linked_list'

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null

  const arr: number[] = []
  while (head) {
    arr.push(head.val as number)
    head = head.next
  }

  arr.sort((a, b) => a - b)

  let ans: ListNode | null = null
  for (const val of arr.reverse()) {
    ans = new ListNode(val, ans)
  }
  return ans
}

const main = () => {
  const head = createListNode([4, 19, 14, 5, -3, 1, 8, 5, 11, 15])
  const sorted = sortList(head)
  console.log(linkedListNodePrinter(sorted))
}
main()

// faster solution
function sortList2(head: ListNode | null): ListNode | null {
  if (head) return helper(head)
  else return head
}

function helper(head: ListNode): ListNode {
  if (!head) return head
  if (!head.next) return head
  const [left, right] = split(head)
  const newLeft = helper(left)
  const newRght = helper(right)
  return merge(newLeft, newRght)
}

function split(head: ListNode): [ListNode, ListNode] {
  let fast = head
  let slow = head
  let left: ListNode | null = null
  let right: ListNode | null = null
  while (true) {
    if (fast.next) fast = fast.next
    else {
      left = head
      right = slow.next
      slow.next = null
      break
    }
    if (fast.next) fast = fast.next
    else {
      left = head
      right = slow.next
      slow.next = null
      break
    }
    slow = slow.next!
  }
  return [left!, right!]
}

function merge(left: ListNode, right: ListNode) {
  let newHead = new ListNode()
  let ptrHead = newHead
  let ptrLeft = left
  let ptrRight = right

  while (true) {
    if (ptrLeft.val < ptrRight.val) {
      ptrHead.next = ptrLeft
      if (ptrLeft.next) {
        ptrLeft = ptrLeft.next
        ptrHead = ptrHead.next
      } else {
        ptrHead.next.next = ptrRight
        break
      }
    } else {
      ptrHead.next = ptrRight
      if (ptrRight.next) {
        ptrRight = ptrRight.next
        ptrHead = ptrHead.next
      } else {
        ptrHead.next.next = ptrLeft
        break
      }
    }
  }

  return newHead.next!
}
