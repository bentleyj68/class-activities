# 1. import Flask
from flask import Flask

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Hello, world!"
    # return "Welcome to my API!"


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Jim Bentley at UWA"

# 5. Define what to do when a user hits the /contact route
@app.route("/contact")
def contact():
    print("Server received request for 'Contact' page...")
    return "Jim Bentley, email me at bentleyj68@gmail.com"

if __name__ == "__main__":
    app.run(debug=True)
