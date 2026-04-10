//Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i <=n; i++){
        let minIndex = i;
        for(let j = i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex
            }
        }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
}