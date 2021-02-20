# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]

# Computer Selection
computer_choice = random.choice(options)

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")
print(computer_choice)

# Run Conditionals
if user_choice == "r":
    if computer_choice == "p":
        print("Computer Wins")
    elif computer_choice == "s":
        print("you win!")
    else:
        print("it's a draw")
elif user_choice == "p":
    if computer_choice == "s":
        print("Computer Wins")
    elif computer_choice == "r":
        print("you win!")
    else:
        print("it's a draw")
else:
    if computer_choice == "r":
        print("Computer Wins")
    elif computer_choice == "p":
        print("you win!")
    else:
        print("it's a draw")
