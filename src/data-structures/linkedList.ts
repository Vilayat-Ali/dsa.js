// implementing node class
class node<T>{
    data: T;
    nextNode: unknown;
    constructor(data: T){
        this.data = data;
        this.nextNode = null;
    }
}

// implementing linkedList utility class 
export default class linkedList<T>{
    head: any; 
    tail: any; 
    size: number;
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    insertAtEnd(data: T){
        var newNode = new node<T>(data);
        var start = this.head;
        if(this.head === null){ // maiden addition
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }else{
            while(start.nextNode != null){
                start = start.nextNode;
            }
            // adding node
            start.nextNode = newNode;
            this.tail = newNode;
            this.size++;
        }
    }
    insertAtIndex(data: T, index: number){
       try{
        if(index<0 || index>(this.size)){
            throw new RangeError();
        }else{
            var newNode = new node<T>(data);
            if(index === 0){ // at 0 index
                // adding node
                var temp = this.head;
                this.head = newNode;
                newNode.nextNode = temp;
                this.size++;
            }else{ // at anyother index
                var start = this.head;
                for(var i=0; i<(index-1); i++){
                    start = start.nextNode;
                }
                // adding node 
                var temp = start.nextNode;
                start.nextNode = newNode;
                newNode.nextNode = temp;
                this.size++;
            }
        }
       }catch(err){
        if (err instanceof RangeError){
            console.log(`Range Error: ${index} is out of range.`);
        }
       }
    }
    removeAtEnd(){
        var start = this.head;
        if(this.size === 0){
            console.log('Underflow: Cannot delete from empty linked list.')
        }else{
            if(this.size === 1){
                this.head = null;
                this.tail = null;
                this.size--;
            }else{
                for(var i=0; i<(this.size-2); i++){
                    start = start.nextNode;
                }
                start.nextNode = null;
                this.tail = start;
                this.size--;
            }
        }
    }
    removeAtIndex(index: number){
        try{
            if(index<0 || index > (this.size)){
                throw new RangeError();
            }else{
                var start = this.head;
                if(index === 0){
                    this.head = null; // deleting element 
                    this.size--;
                }else if(index !==0 && index === this.size-1){ // working
                    for(var i=0; i<=(index); i++){
                        start = start.nextNode;
                    }
                    start.nextNode = null;
                }else{ // not working/ issues
                    for(var i=0; i<=(index-1); i++){
                        start = start.nextNode;
                    }
                    start.nextNode = null;
                }
            }
        }catch(e){
            if(e instanceof RangeError){
                console.log(`Range Error: ${index} is out of range.`);
            }
        }
    }
    showList(): T[]{
        var arr: T[] = [];
        if(this.size===0){
            arr = [];
        }else{
            if(this.size === 1){
                arr.push(this.head.data);
            }else{
                var start = this.head;
                while(start.nextNode != null){
                    arr.push(start.data);
                    start = start.nextNode;
                }
                arr.push(start.data);
            }
        }
        return arr;
    }
}

// testing 
const obj = new linkedList<string>();
obj.insertAtEnd('d');
obj.insertAtEnd('e');
obj.insertAtIndex('p', 1);
obj.insertAtEnd('z');
obj.insertAtIndex('t', 2);
obj.insertAtEnd('w');
console.log(obj.showList());
console.log(obj.size);
obj.removeAtIndex(4);
obj.removeAtIndex(3);
obj.removeAtIndex(2);
console.log(obj.showList());