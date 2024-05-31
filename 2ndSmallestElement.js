var find2ndSmallest = (array) =>{
    let size = array.length;
    let first = 200000;
    let second = 200000;
    
    for(let i = 0 ; i < size ; i++){
        if(first > array[i]){
            first = array[i];
        }
    }
    
    console.log("Smallest Element : " + first);
    
    for(let i = 0 ; i < size ; i++){
        if(first != array[i]){
            if(second > array[i]){
                second = array[i];
             }
        }
    }
    
    return second;
}

let array = [111, 13, 25, 9, 34, 1];
let answer = find2ndSmallest(array);
console.log("2nd Smallest Element : " + answer);