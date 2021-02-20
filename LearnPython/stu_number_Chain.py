choice = "y"
while choice == "y":
    number = input("How many numbers?")
    for x in range(1, int(number) + 1):
        print(x)
    choice = input("Continue the chain: (y)es or (n)o?")
