function calculate_median(arr) {
   var arr1 = [];
    for(var i=1;i<arr.length;i+=2){
            arr1.push(arr[i]);
    }
    arr1 = arr1.sort();
    if(arr1.length%2==1){
       return arr1[length/2+1];
    }else{
        return (arr1[length/2+1]+arr1[length/2+2])/2;
    }
}
