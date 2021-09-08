// add whatever parameters you deem necessary
function separatePositive(nums=[]) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        currLeft = nums[left]
        currRight = nums[right]
        if (currLeft < 0 && currRight > 0) {
            let temp = currRight
            nums[right] = nums[left]
            nums[left] = temp
        }
        
        if (currRight < 0) right--
        if (currLeft > 0) left++
    }
    console.log(nums)
    return nums
}
