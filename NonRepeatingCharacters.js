
function findNonRepeatingCharacters( string ){
    let size = string.length
    let count = {};
    
    for(let i = 0; i < size ; i++){
        if(count[string[i]]){
            count[string[i]]++;
        }
        else count[string[i]] = 1;
    }
    
    for(let index in count){
        if(count[index] === 1){
            console.log(index);
        }
    }
}

findNonRepeatingCharacters("google");