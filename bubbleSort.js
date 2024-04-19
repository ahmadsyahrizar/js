// BUBBLE SORT ALGORITHM.
const bubbleSort = (arr, n) => {
 // code here
 let temp;
 let swapped;

 for(let i=0; i<n-1; i++){
   swapped = false; 

   for(let j=0; j < n-1; j++){
    // 7     >      1
     if(arr[j] > arr[j+1]){
       temp = arr[j]; // 7
       arr[j] = arr[j+1]; // array ke 0 = 1 
       arr[j+1] = temp; // 7; 
       // first result = [1, 7, 4, 6]
       swapped = true;
     }
   }

   if(!swapped);
   break;
 }
}

const arr = [35, 30, 10, 60, 80, 95, 100, 3]
// console.log("Array Input", arr)
bubbleSort(arr, arr.length);
// print(arr, arr.length)