// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    // create an object with chars from keys as the keys 
    // and chars from vals as their vals
    // ignore extra vals, set other keys to null
    // big O: O(N)
    let obj = {}
    let i = 0
    while (i < keys.length) {
        let currChar = keys[i]
        obj[currChar] = vals[i] || null
        i++
    }
    return obj
}
