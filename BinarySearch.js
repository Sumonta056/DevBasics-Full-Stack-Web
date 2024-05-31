
var binarySearch = (arr,n,target) => {
    let low = 0;
    let high = n-1;
    
    while(low <= high){
        let mid = Math.floor((high+low)/2);
        if(arr[mid] == target)
            return mid;
        else if(arr[mid] > target)
            high = mid-1;
        else 
            low = mid+1;
    }
    return -1;
}


var arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
var n = arr.length
var target = 23;

var index = binarySearch(arr,n,target);

if(index == -1) console.log("Not Found");
else console.log("Found at Index = " + index);


