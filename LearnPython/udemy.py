import os
import csv

readpath = os.path.join('Resources', 'web_starter.csv')
writepath = os.path.join('Output', 'web_final.csv')

index = []
title = []
price = []
subscriber_count = []
reviews = []
perc_reviews = []
course_length = []

with open(readpath,encoding="utf8") as readfile:

   csvreader = csv.reader(readfile, delimiter=',')
   
   for row in csvreader:
       index.append(row[0])
       title.append(row[1])
       price.append(row[4])
       subscriber_count.append(row[5])
       reviews.append(row[6])
       perc = round(int(row[6]) / int (row[5]) * 100, 2)
       perc_reviews.append(perc)
       course_length.append(row[7])

web_list = zip(index, title, price, subscriber_count,reviews, perc_reviews, course_length)

with open(writepath, 'w', newline='', encoding="utf8") as csvfile:
    csvwriter = csv.writer(csvfile, delimiter=',')
    csvwriter.writerow(['Index', 'Title', 'Price', 'Subscriber Count', 'Reviews', '% Reviews', 'Course Length'])
    csvwriter.writerows(web_list)