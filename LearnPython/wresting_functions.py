import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join('Resources', 'WWE-Data-2016.csv')

# Define the function and have it accept the 'wrestlerData' as its sole parameter
def print_percentages(wrestler):
  # Find the total number of matches wrestled
  total = int(wrestler[1]) + int(wrestler[2]) + int(wrestler[3])
  # Find the percentage of matches won
  won_perc = round(int(wrestler[1]) / total * 100, 2)
  # Find the percentage of matches lost
  loss_perc = round(int(wrestler[2]) / total * 100, 2)
  # Find the percentage of matches drawn
  draw_perc = round(int(wrestler[3]) / total * 100, 2)
  # Print out the wrestler's name and their percentage stats
  print(f'Wrestler: {wrestler[0]} Win%: {won_perc} Loss%: {loss_perc} Draw%: {draw_perc}')

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
