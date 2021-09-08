// add whatever parameters you deem necessary
function averagePair(arr, target) {
    // set up two pointers
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        // average the values at our two pointers
        const avg = (arr[left] + arr[right]) / 2
        // if it's a match return true
        // otherwise if our target is greater than our avg
        // bump the left pointer up to increase the value
        if (avg === target) return true
        else if (target > avg) left++
        else right--
    }
    return false
}
