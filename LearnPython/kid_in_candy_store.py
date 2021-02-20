# The list of candies to print to the screen
candy_list = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish", "Skittles", "Hershey Bar", "Starbursts", "M&Ms"]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print out options
for x in range(len(candy_list)):
    print(f"[{x}] {candy_list[x]}")

# Import User Selection
for y in range(allowance):
    candy_cart.append(input("Input the number of the candy you want: "))

# Output user choice
print("I brought home with me")
for z in range(allowance):
    print(candy_list[int(candy_cart[z])])