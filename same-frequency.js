// add whatever parameters you deem necessary
function sameFrequency(num1 = 0, num2 = 0) {
    let count1 = makeFreqCounter(num1.toString())
    let count2 = makeFreqCounter(num2.toString())
    for (let num in count1) {
        if (!count2[num]) return false
        if (count1[num] < count2[num] || count1[num] > count2[num]) 
            return false
    }
    return true
}

function makeFreqCounter(arr) {
    const freqCounter = {}
    for (let el of arr) {
            freqCounter[el] = (freqCounter[el] + 1) || 1
    }
    return freqCounter
}