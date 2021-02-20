# calc_main.py

def calc_avg (numbers):
    sum = 0.0
    for number in numbers:
        sum = sum + number
    return sum / len(numbers)

print(calc_avg([23,45,67,34,12,6,89,11]))
print(calc_avg(range(11)))