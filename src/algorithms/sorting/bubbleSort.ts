export default function bubbleSort<T>(unsortedArr: T[], order?:number):T[]{
    for(var i=0; i<unsortedArr.length; i++){
        for(var j=0; j<unsortedArr.length-1; j++){
            if(order === 0){
                if(unsortedArr[j]>unsortedArr[j+1]){
                    var temp = unsortedArr[j];
                    unsortedArr[j] = unsortedArr[j+1];
                    unsortedArr[j+1] = temp;
                }
            }else{
                if(unsortedArr[j]<unsortedArr[j+1]){
                    var temp = unsortedArr[j];
                    unsortedArr[j] = unsortedArr[j+1];
                    unsortedArr[j+1] = temp;
                }
            }
        }
    }
    return unsortedArr;
}