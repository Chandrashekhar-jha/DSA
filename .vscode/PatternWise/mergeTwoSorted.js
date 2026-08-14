//Brute Method
function mergeArrays(arr1, arr2) {

    let result = [];

    for (let num of arr1) {
        result.push(num);
    }

    for (let num of arr2) {
        result.push(num);
    }

    result.sort((a, b) => a - b);

    return result;
}

// Optimal

function merge(nums1, m, nums2, n) {

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {

        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
}