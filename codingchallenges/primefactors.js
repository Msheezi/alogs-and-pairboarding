
const getPrimeFactors = (num,high)=>{
    let result = []

    let i = 1
   

    while( num**i <= high){
        // console.log(num**i)
        result.push(num**i)
        i++
    }
    return result
}

const twoProds = (arr, target)=> {
    let count = 0
    let [left, right] = [0, arr.length - 1]
        while(left<right){
            let potentialMatch = arr[left] * arr[right]
            if(potentialMatch>target)right-=1
            else if (potentialMatch<target)left += 1
            else {
                count+=1
                left += 1
                right -= 1
                console.log(potentialMatch, arr[left],arr[right])
            }
        }
        return count
}


const primeFactorsInRange = (low,high)=>{
    let count = 0
    let resultArray = getPrimeFactors(3,high).concat(getPrimeFactors(5,high))

    let sorted = resultArray.sort((a,b)=> a-b)
    console.log(sorted)
    for (let i=low;i<=high;i++){
        count += twoProds(sorted, i)
    }
    return count
}


console.log(getPrimeFactors(3,200,455))
console.log(getPrimeFactors(5,200,455))
console.log(primeFactorsInRange(200,400))