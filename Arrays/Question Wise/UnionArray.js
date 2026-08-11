class Solution{
    unionArray(arr1,arr2){

        let n = arr1.length
        let m = arr2.length

        let s = new Set()

        for(let i = 0; i< n; i++){
            s.add(arr1[i])
        }

        for(let i = 0; i< m; i++){
            s.add(arr2[i])
        }

        let newArr = [...s]
        newArr.sort((a,b) => a-b)

        return newArr
    }
}