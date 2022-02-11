// creating node structure
export default class node<T>{
    data: T;
    lChild: any;
    rChild: any;
    constructor(data: T, lChild: any, rChild: any){
        this.data = data;
        this.lChild = lChild; // left child of the tree node
        this.rChild = rChild; // right child of the tree node
    }
}