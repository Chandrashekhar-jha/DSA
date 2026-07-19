//Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

class buubbleSort {
    bubbleSort(arr){
        let n = arr.length
        for(let i=n-1; i>=0; i--){
            for(letj=0; j<=i-1; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        return arr
    }
} 