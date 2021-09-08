function makeFreqCounter(arr) {
    const freqCounter = {}
    for (let el of arr) {
            freqCounter[el] = (freqCounter[el] + 1) || 1
    }
    return freqCounter
}

function squares(nums1, nums2) {
    if (nums1.length !== nums2) return false
    const nums1Freq = makeFreqCounter(nums1)
    const nums2Freq = makeFreqCounter(nums2)
    for (let key in nums1Freq) {
        if (!nums2Freq[key ** 2]) return false
    }
}
