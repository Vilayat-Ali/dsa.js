export default function linearSearch<T>(Arr: T[], key:T){
    if(Arr.indexOf(key) === -1){
        throw `Key ${key} is not present in the list`;
    }
    else{
        for(var i=0; i<Arr.length; i++){
            if(key === Arr[i]){
                return i;
            }
        }
    }
}