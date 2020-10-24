
const getPrimeFactors = (num,high)=>{
    let result = []
    let i = 1
    while( num**i <= high){
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
            else if (potentialMatch===target) {
                console.log(potentialMatch, arr[left],arr[right], arr)
                left += 1
                right -= 1
                count+=1
            }
        }
        return count
}


const primeFactorsInRange = (low,high)=>{
    let count = 0
    let resultArray =  getPrimeFactors(3,high).concat(getPrimeFactors(5,high)) // o(n)
    // let resultArray = [1].concat( getPrimeFactors(3,high)).concat(getPrimeFactors(5,high)) // o(n)

    let sorted = resultArray.sort((a,b)=> a-b) // log n
    for (let i=low;i<=high;i++){ //o(n) - essentially a nested loop
        count += twoProds(sorted, i) 
    }
    return count
}


//time complexith n^2 log n
//space n^2

console.log(getPrimeFactors(3,200,455))
console.log(getPrimeFactors(5,200,455))
console.log(primeFactorsInRange(200,400))
// console.log(primeFactorsInRange(0,755000))
console.log(primeFactorsInRange(0,10))