class node<T>{
    data: T; 
    priority:number;
    leftChild: unknown;
    rightChild: unknown;
    constructor(data:T, priority:number){
        this.data = data;
        this.priority = priority;
        this.leftChild = null;
        this.rightChild = null;
    }
}

export default class priorityQueue<T>{
    size: number;
    front: any;
    rear: any;
    maxPriority: number|null;
    minPriority: number|null;
    constructor(){
        this.size = 0; 
        this.front = null;
        this.rear = null;
        this.maxPriority = null;
        this.minPriority = null;
    }
    enqueue(data:T, priority:number){
        // allocating a new node 
        var newNode = new node<T>(data, priority);

        // Enquing the queue element 
        var start = this.front;
        if(start === null){
            this.front = newNode;
            this.rear = newNode;
            this.maxPriority = priority;
            this.minPriority = priority;
            this.size++;
        }
        else{
            while(start.rigthNode !== null){
                if(start.priority > priority){
                    start = start.rigthNode;
                    var temp = start;
                }else{
                    newNode.leftChild = start.leftChild;
                    newNode.rightChild = temp.rightChild;
                    this.size++;
                }
            }
        }
    }
    showQueue():T[]{
        var queue: T[] = [];
        var start = this.front;
        return queue;
    }
}

