
const insertionSort = (arr, n) => {
  let key;
  let j;

    for(let i = 1; i < n; i++){
       key  = arr[i];
       j = i -1;

       while(j >= 0 && arr[j] > key){
         arr[j+1] = arr[j];
         j = j-1;
       }

       arr[j+1] = key;
    }
};

let arrInput = [33, 4, 20, 5, 2];
insertionSort(arrInput, arrInput.length);
// print(arrInput, arrInput.length)