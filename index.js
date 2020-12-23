function largestSubarraySum(array){
    let local_max = 0
    let global_max = Number.NEGATIVE_INFINITY

for (let i = 0; i < array.length; i++){
    local_max = Math.max(array[i], array[i] + local_max)
    
    if (local_max > global_max){
        global_max = local_max
    }
}
return global_max

}
  

