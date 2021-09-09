// add whatever parameters you deem necessary
function countPairs(nums, target) {
    // loop over nums, 
    // check current val at index
    // subtract that from target
    // if that number exists in array,
    // total++
    // otherwise keep going
    total = 0
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i]
        let check = target - currVal
        if (nums.includes(check, i + 1)) total++
    }
    return total
}
