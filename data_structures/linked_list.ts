export interface LinkedListNode<T> {
  val: T
  next: LinkedListNode<T> | null
}

export class ListNode implements LinkedListNode<number> {
  val: number
  next: ListNode | null
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export function createListNode(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  const head = new ListNode(arr[0], null)
  let tail = head

  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i], null)
    tail.next = node
    tail = node
  }
  return head
}

export function linkedListNodePrinter<T>(head: LinkedListNode<T> | null) {
  const arr: (T | null)[] = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}
