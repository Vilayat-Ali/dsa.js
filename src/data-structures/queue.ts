import linkedList from "./linkedList";

// implementing queue data structure using linked lists 
export default class linearQueue<T>{
    front: any;
    rear: any;
    list: any;
    constructor(){
        this.front = null;
        this.rear = null;
        this.list = new linkedList<T>();
    }
    insert(data: T){
        
    }

}
