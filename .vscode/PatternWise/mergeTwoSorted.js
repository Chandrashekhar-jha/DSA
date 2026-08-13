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