//Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.

class rjan {
    kharrr(pee){
        let hu = pee.length
        for(let i=0; i<hu; i++){
            let Mi= i
            for(j=i+1; j<hu; j++){
                if(pee[j] < pee[Mi]){
                    Mi = j
            }

        }
        let raju = pee[i]
        pee[i] = pee[Mi]
        pee[Mi] = raju
        }
        return pee
    }
} 