// implementing stacks using linked lists 
export default class arrayList<T>{
    size: number; 
    list: T[];
    constructor(){
        this.list = [];
        this.size = 0;
    }
    pushElement(data: T){
        this.list.push(data);
        this.size++;
    }
    popElement():T|boolean{
        var pop: T|boolean;
        if(this.size !== 0){
             pop = this.list[(this.size-1)];
            this.list.pop();
        }else{
             pop = false;
        }
        return pop;
    }
}