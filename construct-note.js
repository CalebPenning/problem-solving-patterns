function makeFreqCounter(arr) {
    const freqCounter = {}
    for (let el of arr) {
        freqCounter[el] = (freqCounter[el] + 1) || 1
    }
    return freqCounter
}

// add whatever parameters you deem necessary
function constructNote(msg = "", letters = "") {
    let letterFreq = makeFreqCounter([...letters])
    let msgFreq = makeFreqCounter([...msg])
    for (let char in msgFreq) {
        // if letter count in msg != letter count in letters
        // return false
        // else if loop finishes its cycle
        if (!letterFreq[char]) return false
        if (letterFreq[char] < msgFreq[char]) return false
    }
    return true
}

constructNote("abcdef", "aaaaabbbbbbcccccdddeeeffff")