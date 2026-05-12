class Solution {
    
    merge(arr, low, mid, high) {
        const temp = [];
        let left = low, right = mid + 1;

        
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right])
                temp.push(arr[left++]);
            else
                temp.push(arr[right++]);
        }

        
        while (left <= mid)
            temp.push(arr[left++]);

        
        while (right <= high)
            temp.push(arr[right++]);

        
        for (let i = low; i <= high; i++)
            arr[i] = temp[i - low];
    }

    
    mergeSort(arr, low, high) {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2);

        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid + 1, high);
        this.merge(arr, low, mid, high);
    }
}


let arr = [5, 2, 8, 4, 1];
let sol = new Solution();
sol.mergeSort(arr, 0, arr.length - 1);
console.log(...arr);
