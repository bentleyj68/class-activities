import pymongo
import datetime as dt

# Collects the user's input for the new fruit
name = input("What is the vendor name? ")
fruit_type = input("What is the fruit type? ")
qty = int(input(f"How much {fruit_type} have we ordered? "))
ripe = int(input(f"What is the ripeness of the fruit (1-unripe, 2-ripe, 3-overripe)? "))

# Store record in the db
client = pymongo.MongoClient("mongodb://localhost:27017/")
fruit_db = client["fruits_db"]
fruit_col = fruit_db["fruits"]

fruit_dict = { "vendor_name": name, "type": fruit_type, "quantity": qty, "ripeness": ripe, "time": dt.datetime.utcnow() }

x = fruit_col.insert_one(fruit_dict)

print(x)