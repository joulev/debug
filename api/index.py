from flask import Flask

app = Flask(__name__)


@app.route("/api/hello-world")
def home():
    return "Hello, World!"
