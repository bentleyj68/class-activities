# Insert Data Program
import pymongo

fruit_dict = { "type": "bananas", "cost": 45, "stock": 67 }

# Store record in the db
client = pymongo.MongoClient("mongodb://localhost:27017/")
fruit_db = client["fruits2_db"]
fruit_col = fruit_db["fruits"]

x = fruit_col.insert_one(fruit_dict)

print(x)