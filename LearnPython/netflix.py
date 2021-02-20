import os

# Module for reading CSV files
import csv

csvpath = os.path.join('Resources', 'netflix_ratings.csv')

title = input('What show or movie are you looking for? ')

with open(csvpath) as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')
   
    # Read the header row first
    csv_header = next(csvreader)
    # print(f"CSV Header: {csv_header}")
    
    video_found = False

    for row in csvreader:
        # print(row)
        if row[0] == title:
            print(f"{title} is rated {row[1]} with a rating of {row[3]}")
            video_found = True
        if video_found:
            break
        # next(csvreader)
    
    if video_found == False:
        print(f"{title} could not be found")