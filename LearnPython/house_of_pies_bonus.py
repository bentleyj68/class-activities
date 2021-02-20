# The list of cpies to print to the screen
pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun", "Blueberry", "Buko", "Burek", "Tamale", "Steak"]
pie_choices = []

print("Welcome to the House of Pies!  Here are our pies")
print("-------------------------------------------------------------------------")
print(f"[1] {pie_list[0]} [2] {pie_list[1]} [3] {pie_list[2]} [4] {pie_list[3]} [5] {pie_list[4]} [6] {pie_list[5]} [7] {pie_list[6]} [8] {pie_list[7]} [9] {pie_list[8]} [10] {pie_list[9]}")

answer = "y"
pieNumber = 0

while answer == "y":

    selection = input("What selection would you like? ")

    print(f"Great! We'll have that {pie_list[int(selection)-1]} pie right out for you")
    pieNumber += 1
    pie_choices.append(pie_list[int(selection)-1])
    answer = input("would you like to make another purchase: (y)es or (n)o? ") 

print(f"You have ordered {pieNumber} pies")

for pieA in (pie_list):
    count = 0
    for pieB in pie_choices:
        if pieB == pieA:
            count += 1 
    print(f"{count} {pieA}")
