function makeFreqCounter(arr) {
    const freqCounter = {}
    for (let el of arr) {
            freqCounter[el] = (freqCounter[el] + 1) || 1
    }
    return freqCounter
}

const validAnagram = (word1, word2) => {
    if (word1.length !== word2.length) return false
    let freqWord1 = makeFreqCounter(word1)
    let freqWord2 = makeFreqCounter(word2)
    for (let char in freqWord1){
        if (!freqWord2[char]) return false
        if (freqWord2[char] < freqWord1[char]) return false
    }
    return true
}

// Extremely naive and bad performing version below
// b-b-b-b-b--b--b-b-b- but it's one line!!!  

const validAnagram2 = (word1, word2) => {
    return (
        word1.split("").sort().join("") === str2.split("").sort().join("")
    )
}

// da correct freq counter

const newFreqCounter = str => {
    let freqs = new Map()
    for (let val of str) {
        let valCount = freqs.get(val) || 0
        freqs.set(val, valCount + 1)
    }
    return freqs
}

// the correct anagram checker
// think mine works fine :) 

const anagramChecker = (word1, word2) => {
    if (word1.length !== word2.length) return false
    let freqWord1 = newFreqCounter(word1)
    let freqWord2 = newFreqCounter(word2)
    if (freqWord1.size !== freqWord2.size) return false
    for (let letter of freqWord1.keys()) {
        if (freqWord2.get(letter) !== freqWord1.get(letter)) return false
    }
    return true
}


// function that finds two numbers in a sorted array that sum to zero
// naive approach
const getZeroSum = nums => {
    for (let i = 0; i < nums.length; i++) {
        // if outer loop goes past all negative numbers
        // and there's no match, break
        if (nums[i] > 0) break
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) return [nums[i], nums[j]]
        }
    }
}

// multiple pointers approach 
// remember this is a sorted array
const zeroSum = nums => {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum === 0) return [nums[left], nums[right]]
        else if (sum > 0) right--
        else left++
    }
}