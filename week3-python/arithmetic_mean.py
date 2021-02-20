def calc_mean (nums):
    total = 0.0
    number  = len(nums)
    for num in nums:
        total =+ num
    return total / number
    
print(calc_mean([1,5,9]))
