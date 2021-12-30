import linkedList from "../linked-list/linkedList";

// implementing queue data structure using linked lists 
export default class priorityQueue<T>{
    front: any;
    rear: any; 
    size: number;
    list: linkedList<T>;
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0; 
        this.list = new linkedList<T>();
    }
    enqueue(data: T, priority: number){

    }
    dequeue(){
        this.list.removeAtIndex(0);
        this.front = this.list.head;
        this.size--;
    }
    elementAtIndex(index: number){
        return this.list.elementAtIndex(index);
    }
    showQueue(){
        const arr = this.list.showList();
        return arr;
    }
} 