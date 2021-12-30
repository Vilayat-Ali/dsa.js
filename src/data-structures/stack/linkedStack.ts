import linkedList from "../linked-list/linkedList";

// implementing Stack data structure using linked lists 
export default class linkedStack<T>{
    top: any;
    size: number;
    list: linkedList<T>;
    constructor(){
        this.top = null;
        this.size = 0;
        this.list = new linkedList<T>();
    }
    push(data: T){
        this.list.insertAtIndex(data, 0);
        this.top = this.list.head;
        this.size++;
    }
    pop(){
        if(this.size === 1){
            this.list.removeAtEnd();
            this.top = null;
            this.size--;
        }else{
            this.list.removeAtEnd();
            this.size--;
        }

    }
    showTop(index: number){
        return this.top;
    }
    showStack(){
        const arr = this.list.showList();
        return arr;
    }
}
