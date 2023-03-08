// node is a peaсe of data (item in a list in this situation)

class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    if(!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head 
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(idx){
    if(idx < 0 || idx >= this.length) return undefined
    let counter = 0;
    let current = this.head
    while(idx > counter){
      current = current.next;
      counter += 1;
    }
    return current;
  }
  
  set(idx, value){
    const itemToChage = this.get(idx);
    if(itemToChage){
      itemToChage.value = value;
      return itemToChage;
    }
    return null;
  }

  insert(idx, value){
    if(idx < 0 || this.length < idx) return null;
    if(this.length === idx) return this.push(value);
    else if(idx === 0) return this.unshift(value);

    const prev = this.get(idx - 1);
    const next = this.get(idx);
    const newNode = new Node(value);
    prev.next = newNode;
    newNode.next = next;
    this.length += 1;
    return this;
  }

  remove(idx){
    if(idx < 0 || idx >= this.length) return null;
    if(idx === 0) return this.shift();
    if(idx - 1 === this.length) return this.pop();
    const prevNode = this.get(idx - 1);
    const nextNode = this.get(idx + 1);
    prevNode.next = nextNode;
    this.length -= 1;
    return this;
  }

  reverse(){
    if(this.length <= 1) return null;
    let tempHead = this.head;
    this.head = this.tail
    this.tail = tempHead;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      next = tempHead.next;
      tempHead.next = prev;
      prev = tempHead;
      tempHead = next;
    } 
    return this;
  }
}

const newList = new SinglyLinkedList()
newList.push('first')
console.log(newList)
newList.push('second')
console.log(newList)
newList.push('third')
console.log(newList)
newList.push('fourth')
console.log(newList.reverse())