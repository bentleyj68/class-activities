import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join("..", "Resources", "WWE-Data-2016.csv")

# Define the function and have it accept the 'wrestlerData' as its sole parameter
def print_percentages ( wrestlerData):
    # Find the total number of matches wrestled
    total = int(wrestlerData[1]) + int(wrestlerData[2]) + int(wrestlerData[3])
    # Find the percentage of matches won
    average = int(wrestlerData[1]) / total * 100
    # Find the percentage of matches lost
    lostperc = int(wrestlerData[2]) / total * 100
    # Find the percentage of matches drawn
    drawperc = int(wrestlerData[3]) / total * 100
    # Print out the wrestler's name and their percentage stats
    print (f'Wrestler name: {wrestlerData[0]} ')
    print (f'Average wins: {average} ')
    print (f'Average losses: {lostperc} ')
    print (f'Average draws: {drawperc} ')

# Read in the CSV file
with open(wrestling_csv, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("What wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'print_percentages()' function
        if(name_to_check == row[0]):
            print_percentages(row)
