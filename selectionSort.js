const selectionSort = (arr, n) => {
 let minValue;
 let tmp;

 for(let i=0; i<n-1; i++){
  minValue=i;
  
  for(let j= i+1; j<n; j++){
   if(arr[j] < arr[minValue]){
     minValue = j;    
    }
   }
   // swap(arr, minValue, i)
   let tmp = arr[minValue]; // 20
   arr[minValue] = arr[i];
   arr[i] = tmp;
  }
}


let arrNum = [50, 20, 12, 18,11];
selectionSort(arrNum, arrNum.length)
print(arrNum, arrNum.length)