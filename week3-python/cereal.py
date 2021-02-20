import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal.csv")

with open(cereal_csv) as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')
    # Read the header row first (skip this step if there is now header)
    csv_header = next(csvreader)

    for row in csvreader:
        
        # print(row)
        if float(row[7]) >= 5:
            print(row)