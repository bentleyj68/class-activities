# Cereal.py
import os
import csv

csvpath = os.path.join('Resources', 'cereal.csv')

with open(csvpath) as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')
   
    # Read the header row first
    csv_header = next(csvreader)
    print(f"CSV Header: {csv_header}")

    for row in csvreader:
        if float(row[7]) >= 5:
            print(row[0] + ' ' + row[7])
 